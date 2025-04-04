"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

import { Authenticator } from "@/components/custom/Authenticator";
import Link from "next/link";
import { OrderType } from "@/constants/Shop/shop";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate } from "date-fns";

export default function Orders() {

  const [orders, setOrders] = useState<OrderType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const fetchOrders = async () => {
      const { orders } = await (await fetch("/api/orders/all")).json()
      setOrders(orders)
    }
    fetchOrders()
  }, [])

  const headers = [
    "ID",
    "Status",
    "Customer Information",
    "Location",
    "Items",
    "Payment/Notes",
  ]

  const toggleStatus = async (id: string) => {
    if (loading) return;
    setLoading(true)
    const { order } = await (await fetch("/api/orders/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })).json()
    setOrders(orders => orders.map(o => o._id === order._id ? order : o))
    setLoading(false)
  }

  return (
    // <Authenticator>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map(header => (
              <TableHead>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(({customerInfo: {name, email, phone, city, address, postalCode}, completed, items, notes, paymentURL, _id, createdAt}, index) => (
            <TableRow key={_id!.toString()}>
              <TableCell>{index+1}</TableCell>
              <TableCell className="w-min">
                <div className="flex flex-col gap-2">
                  <div onClick={() => toggleStatus(_id!.toString())} className={`rounded-md p-1 px-2 text-xs font-bold text-white flex justify-center w-20 ${loading ? "bg-neutral-500" : completed ? "bg-green-500" : "bg-red-600"}`}>
                    {completed ? "Fulfilled" : "Pending"}
                  </div>
                  <p>{formatDate(createdAt!, "dd-MMMM-yy")}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">Name:</p>
                    <p>{name}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">Email:</p>
                    <p>{email}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">Phone:</p>
                    <p>{phone}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">City:</p>
                    <p>{city}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">Address:</p>
                    <p className="max-w-40 overflow-scroll whitespace-nowrap">{address}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between pr-4">
                    <p className="font-bold">Post Code:</p>
                    <p>{postalCode}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <ScrollArea className="h-20">
                  <div className="flex flex-col gap-2">
                    {items.map(({name, quantity}) => (
                      <div className="flex justify-between items-center pr-4">
                        <p className="font-semibold">{name}</p>
                        <p className="italic">{`x${quantity}`}</p>
                      </div>
                    ))}
                    {items.map(({name, quantity}) => (
                      <div className="flex justify-between items-center pr-4">
                        <p className="font-semibold">{name}</p>
                        <p className="italic">{`x${quantity}`}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-2">
                  <Link href={paymentURL} target="_blank" className="flex gap-2 items-center">
                    <svg className="size-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></g></svg>
                    <p>View Payment Proof</p>
                  </Link>
                  <HoverCard>
                    <HoverCardTrigger className="flex gap-2 items-center">
                      <svg className="size-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>
                      <p>View Order Notes</p>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="">
                        <p className="font-bold">Order Notes</p>
                        <p className="text-xs">{notes}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    // </Authenticator>
  )
}