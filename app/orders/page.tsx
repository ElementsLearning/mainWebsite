"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Authenticator } from "@/components/custom/Authenticator";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { OrderType } from "@/constants/Shop/shop";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate } from "date-fns";

type FilterType = {
  searchTerm: string;
  fulfilled: null | boolean;
};

const OrdersTable = React.memo(function OrdersTable({
  orders,
  loading,
  toggleStatus,
  deleteOrder,
  filters
}: {
  orders: OrderType[];
  loading: boolean;
  toggleStatus: (id: string) => void;
  deleteOrder: (id: string) => void;
  filters: FilterType;
}) {
  const headers = [
    "ID",
    "Status",
    "Customer Information",
    "Location",
    "Items",
    "Payment/Notes",
  ];

  const filteredOrders = orders.filter(order => {
    const { searchTerm, fulfilled } = filters;
    const term = searchTerm.toLowerCase();
    const matchesSearch = term === "" || [
      order.customerInfo.name,
      order.customerInfo.email,
      order.customerInfo.phone,
      order.customerInfo.city,
      order.customerInfo.address,
      order.customerInfo.postalCode,
      formatDate(order.createdAt!, "dd-MMMM-yy")
    ].some(field => field.toLowerCase().includes(term));

    const matchesStatus = fulfilled === null || order.completed === fulfilled;

    return matchesSearch && matchesStatus;
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map(header => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredOrders.map(({customerInfo: {name, email, phone, city, address, postalCode}, completed, items, notes, paymentURL, _id, createdAt}, index) => (
          <TableRow key={_id!.toString()}>
            <TableCell className="group relative">
              <p className="transition-opacity duration-200 group-hover:opacity-0">{index+1}</p>
              <AlertDialog>
                <AlertDialogTrigger className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-10">
                  <svg className="size-6 text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the order.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteOrder(_id!.toString())} className="bg-red-500 text-white hover:bg-red-600">Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
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
                    <div key={name} className="flex justify-between gap-2 items-center pr-4">
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
                      <p className="text-xs">{notes || "No Additional Notes"}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

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

  const deleteOrder = async (id: string) => {
    if (loading) return;
    setLoading(true)
    await fetch("/api/orders/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    setOrders(orders => orders.filter(o => o._id !== id))
    setLoading(false)
  }

  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<FilterType>({
    searchTerm: "",
    fulfilled: null,
  })

  return (
    <Authenticator>
    <div className="flex flex-col h-screen gap-2 p-4">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="flex gap-2 items-center">
          <p>Filters:</p>
          <button className={`p-2 border font-semibold w-20 text-sm rounded-md ${filters.fulfilled === null ? "bg-blue-500 text-white" : ""}`} onClick={() => setFilters({ ...filters, fulfilled: null })}>
            All
          </button>
          <button className={`p-2 border font-semibold w-20 text-sm rounded-md ${filters.fulfilled === false ? "bg-red-500 text-white" : ""}`} onClick={() => setFilters({ ...filters, fulfilled: false })}>
            Pending
          </button>
          <button className={`p-2 border font-semibold w-20 text-sm rounded-md ${filters.fulfilled === true ? "bg-green-500 text-white" : ""}`} onClick={() => setFilters({ ...filters, fulfilled: true })}>
            Fulfilled
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <Input className="w-80" type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="p-2 border rounded-md" onClick={() => setFilters({ ...filters, searchTerm })}>
            <svg className="size-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.3-4.3"/></g></svg>
          </button>
          <button className="p-2 border rounded-md" onClick={() => { setFilters({ ...filters, searchTerm: ""}); setSearchTerm("") }}>
            <svg className="size-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <OrdersTable orders={orders} loading={loading} toggleStatus={toggleStatus} deleteOrder={deleteOrder} filters={filters} />
    </div>
    </Authenticator>
  )
}