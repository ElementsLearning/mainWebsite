"use client"

import { OrderType } from "@/constants/Shop/shop";
import { DELIVERY_RATE, TAX_RATE, shopItems } from "@/constants/Shop/shopItems";
import { uploadImage } from "@/lib/utils";
import { defaultCustomer } from "@/constants/Shop/defaultCustomer";

import { ItemCard } from "@/components/shopComponents/ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ShopForm } from "@/components/shopComponents/ShopForm";
import { ShopFormType } from "@/constants/Shop/shopSchema";

export default function Shop() {

  const [cart, setCart] = useState<{ [key: string]: number }>(shopItems.reduce((acc, item) => {
    acc[item.name] = 0;
    return acc;
  }, {} as { [key: string]: number }));
  const [state, setState] = useState("");
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

  const submitOrder = async (data: ShopFormType, paymentImage: File) => {
    setLoading(true)
    const link = await uploadImage(paymentImage)
    const order: OrderType = {
      customerInfo: data,
      items: shopItems.map((item) => ({
        name: item.name,
        quantity: cart[item.name],
      })).filter(i => i.quantity > 0),
      paymentURL: link,
      notes: data.orderNotes || "",
      completed: false
    }
    const res = await fetch("/api/orders/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    })
    const resData = await res.json()
    console.log(resData)
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
      setState("")
    }
    setLoading(false)
  }

  return (
    <div className="flex relative h-screen flex-col items-center">
      <div className="flex flex-col gap-4 px-4 py-6 sm:px-10 lg:py-10 lg:px-20 xl:py-16 xl:px-32">
        {shopItems.map((item, index) => (
          <ItemCard key={index} {...item} index={index} quantity={cart[item.name]} updateQuantity={(q) => updateQuantity(item.name, q)}/>
        ))}
      </div>

      <div className="sticky flex flex-col justify-end h-full bottom-0 w-full">
        <div className="flex justify-between items-center p-4 border-t-2 border-black bg-white text-xl md:text-2xl">

          <div className="flex gap-2">
            <p className="font-bold">Total:</p>
            <p className="italic">{totalAmount} Rs.</p>
          </div>

          <button disabled={totalAmount === 0} onClick={() => setState("BILL")} className="bg-[#404791] disabled:bg-gray-500 text-white font-bold px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300">
            Checkout
          </button>
        </div>

      </div>

      {state === "BILL" && (
        <div className="h-full fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-8" onClick={() => setState("")}>
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-[20px] sm:rounded-br-none rounded-br-none sm:rounded-[50px] flex flex-col p-6 gap-1 sm:gap-2 lg:p-12">
            <p className="font-bold text-[#FBBA41] text-lg sm:text-2xl md:text-3xl lg:text-4xl">Checkout</p>
            <div className="h-px bg-black w-full" />
            <ScrollArea className="max-h-48">
              <div className="flex flex-col gap-1 sm:gap-2">
                {shopItems.map((item, index) => (
                  cart[item.name] > 0 && (
                    <div key={index} className="flex justify-between items-center p-2 border-b text-sm sm:text-base md:text-lg"> 
                      <p className="font-bold">{item.name}</p>
                      <p className="">{cart[item.name]} x {item.price} Rs.</p>
                    </div>
                  )
                ))}
              </div>
            </ScrollArea>
            <div className="h-px bg-black w-full" />
            <div className="flex justify-between sm:text-xl">
              <p className="">SubTotal:</p>
              <p className="italic">{totalAmount} Rs.</p>
            </div>
            <div className="flex justify-between sm:text-xl">
              <p className="">Delivery Charges:</p>
              <p className="italic">{DELIVERY_RATE} Rs.</p>
            </div>
            <div className="flex justify-between text-lg sm:text-2xl">
              <p className="font-bold">Total (Tax Inclusive):</p>
              <p className="italic">{(totalAmount * (1+TAX_RATE) + DELIVERY_RATE).toFixed(2)} Rs.</p>
            </div>
            <button className="bg-[#404791] text-white text-lg sm:text-2xl font-bold px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300" onClick={() => setState("FORM")}>
              Proceed
            </button>
          </div>
        </div>
      )}

      {state === "FORM" && (
        <div className="h-full fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-8" onClick={() => setState("")}>
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-[20px] sm:rounded-br-none rounded-br-none sm:rounded-[50px] flex flex-col p-6 gap-2 lg:p-12">
            <p className="font-bold text-[#FBBA41] text-xl sm:text-2xl md:text-3xl lg:text-4xl">Checkout Form</p>
            <ShopForm totalAmount={totalAmount} submitOrder={submitOrder} loading={loading} />
          </div>
        </div>
      )}
    </div>
  )
}