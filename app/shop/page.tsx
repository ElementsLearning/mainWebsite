"use client"

import { CustomerType, OrderType } from "@/constants/Shop/shop";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Image, uploadImage } from "@/lib/utils";

import { FormInput } from "./FormInput";
import { Input } from "@/components/ui/input";
import { ItemCard } from "@/components/shopComponents/ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { defaultCustomer } from "@/constants/Shop/defaultCustomer";
import { shopItems } from "@/constants/Shop/shopItems";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Shop() {

  const [cart, setCart] = useState<{ [key: string]: number }>(shopItems.reduce((acc, item) => {
    acc[item.name] = 0;
    return acc;
  }, {} as { [key: string]: number }));
  const [state, setState] = useState("");
  const [customerInfo, setCustomerInfo] = useState<CustomerType>(defaultCustomer)
  const [orderNotes, setOrderNotes] = useState<string>("")
  const [paymentImage, setPaymentImage] = useState<Image>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const updateQuantity = (itemName: string, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemName]: quantity,
    }));
  };
  
  const totalAmount = shopItems.reduce((total, item) => {
    const itemTotal = item.price * cart[item.name];
    return total + itemTotal;
  }, 0);

  const submitOrder = async () => {
    setLoading(true)
    const link = await uploadImage(paymentImage)
    const order: OrderType = {
      customerInfo,
      items: shopItems.map((item) => ({
        name: item.name,
        quantity: cart[item.name],
      })).filter(i => i.quantity > 0),
      paymentURL: link,
      notes: orderNotes,
      completed: false
    }
    const res = await fetch("/api/orders/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    })
    if (res.status === 200) {
      toast({
        title: "Order Placed",
        description: "Your order has been placed successfully.",
        variant: "default",
      })
      setCart(shopItems.reduce((acc, item) => {
        acc[item.name] = 0;
        return acc;
      }, {} as { [key: string]: number }));
      await fetch("/api/mail/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order, totalAmount }),
      })
      setCustomerInfo(defaultCustomer)
      setPaymentImage(null)
      setOrderNotes("")
      setState("")
    }
  }

  const { name, address, email, phone, city, postalCode } = customerInfo
  const notFilled = name === "" || address === "" || email === "" || phone === "" || city === "" || postalCode === "" || paymentImage === null
  const invalidForm = notFilled || phone.length !== 11 || email.length < 5 || email.indexOf("@") === -1 || email.indexOf(".") === -1

  return (
    <div className="flex relative h-screen flex-col items-center ">
      <div className="flex flex-col gap-4 px-4 py-6 sm:px-10 lg:py-10 lg:px-20 xl:py-16 xl:px-32">
        {shopItems.map((item, index) => (
          <ItemCard key={index} {...item} index={index} quantity={cart[item.name]} updateQuantity={(q) => updateQuantity(item.name, q)}/>
        ))}
      </div>

      <div className="flex justify-between items-center sticky bottom-0 bg-white border-t-2 border-black w-full p-4">
        <div className="flex gap-2">
          <p className="text-2xl font-bold">Total:</p>
          <p className="text-2xl italic">{totalAmount} Rs.</p>
        </div>

        <button disabled={totalAmount === 0} onClick={() => setState("BILL")} className="bg-[#404791] disabled:bg-gray-500 text-white font-bold text-2xl px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300">
          Checkout
        </button>

      </div>

      {state === "BILL" && (
        <div className="h-full fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-8" onClick={() => setState("")}>
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-[20px] sm:rounded-br-none rounded-br-none sm:rounded-[50px] flex flex-col p-6 gap-2 lg:p-12">
            <p className="font-bold text-[#FBBA41] text-lg sm:text-2xl md:text-3xl lg:text-4xl">Checkout</p>
            <div className="h-px bg-black w-full" />
            <ScrollArea className="max-h-48">
              <div className="flex flex-col gap-2">
                {shopItems.map((item, index) => (
                  cart[item.name] > 0 && (
                    <div key={index} className="flex justify-between items-center p-2 border-b">
                      <p className="text-lg font-bold">{item.name}</p>
                      <p className="text-lg">{cart[item.name]} x {item.price} Rs.</p>
                    </div>
                  )
                ))}
              </div>
            </ScrollArea>
            <div className="h-px bg-black w-full" />
            <div className="flex justify-between">
              <p className="text-2xl font-bold">Total:</p>
              <p className="text-2xl italic">{totalAmount} Rs.</p>
            </div>
            <button className="bg-[#404791] text-white font-bold text-2xl px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300" onClick={() => setState("FORM")}>
              Proceed
            </button>
          </div>
        </div>
      )}

      {state === "FORM" && (
        <div className="h-full fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-8" onClick={() => setState("")}>
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-[20px] sm:rounded-br-none rounded-br-none sm:rounded-[50px] flex flex-col p-6 gap-2 lg:p-12">
            <p className="font-bold text-[#FBBA41] text-lg sm:text-2xl md:text-3xl lg:text-4xl">Checkout Form</p>
            <div className="flex flex-col gap-4">
              <FormInput label="Full Name" value={name} setValue={(s) => setCustomerInfo({...customerInfo, name: s})} />
              <div className="flex gap-2">
                <FormInput label="Email" value={email} setValue={(s) => setCustomerInfo({...customerInfo, email: s})} />
                <FormInput label="Phone Number" value={phone} setValue={(s) => setCustomerInfo({...customerInfo, phone: s})} />
              </div>
              <div className="flex gap-2">
                <FormInput label="City" value={city} setValue={(s) => setCustomerInfo({...customerInfo, city: s})} />
                <FormInput label="Post Code" value={postalCode} setValue={(s) => setCustomerInfo({...customerInfo, postalCode: s})} />
              </div>
              <FormInput label="Shipping Address" value={address} setValue={(s) => setCustomerInfo({...customerInfo, address: s})} />
              <div className="flex flex-col justify-between gap-2">
                <div className="flex justify-between items-center">
                  <p className="uppercase tracking-widest text-black">Payment Proof</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <svg className="size-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g></svg>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 flex justify-center">
                      <div className="flex flex-col gap-2 text-sm">
                        <p className="text-lg font-bold">Payment Instructions</p>
                        <p className="text-sm">Please make the payment to the following account:</p>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">Total Amount</p>
                          <p>{totalAmount}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">Account Name</p>
                          <p>Elements Learning</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">Account Number</p>
                          <p>187763369</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">Bank</p>
                          <p>Askari Bank</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <Input className="" type="file" accept="image/*" onChange={(e) => setPaymentImage(e.target.files?.[0] || null)} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="uppercase tracking-widest text-black">Additional Notes</p>
                <Textarea rows={3} placeholder="Message Here (optional)" value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)} className="border p-2 rounded-md text-sm" />
              </div>
              <button disabled={loading || invalidForm} onClick={submitOrder} type="submit" className="bg-[#404791] disabled:bg-gray-500 text-white font-bold text-2xl px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}