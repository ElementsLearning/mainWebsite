"use client"

import { sections } from "../../sections/sections"
import { TabView } from "../TabView"

export default function Service({ params }: { params: { service: string, tab: string }}) {

  const { service, tab } = params

  const currentService = sections.find(sec => sec.serviceName === service)
  const currentTab = currentService?.tabs?.find(tb => tb.tabName === tab)

  return (
    <>
    {currentTab && currentService ? 
    <TabView {...currentService} opened={currentTab} /> :
    <>404</>}
    </>
  )
}