"use client"

import { notFound } from "next/navigation";
import { sections } from "../sections/sections";
import { TabView } from "./TabView";

export default function Service({ params }: { params: { service: string }}) {

  const currentService = sections.find(sec => sec.serviceName === params.service)

  if (!currentService) notFound()

  return (
    <TabView {...currentService} />
  )
}