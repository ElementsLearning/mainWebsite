"use client"

import { useEffect, useState } from "react";

import { ItemCard } from "@/components/shopComponents/ItemCard";
import { shopItems } from "@/constants/Shop/shopItems";

export default function Shop() {

  const [cart, setCart] = useState<{ [key: string]: number }>(shopItems.reduce((acc, item) => {
    acc[item.name] = 0;
    return acc;
  }, {} as { [key: string]: number }));

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

        <button className="bg-[#404791] text-white font-bold text-2xl px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300">
          Checkout
        </button>
      </div>
    </div>
  )
}