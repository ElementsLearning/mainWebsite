export type CustomerType = {
  name: string
  phone: string
  address: string
  email: string
  city: string
  postalCode: string
}

export type OrderType = {
  _id?: string
  createdAt?: string
  customerInfo: CustomerType
  items: {
    name: string
    quantity: number
  }[]
  paymentURL: string
  notes: string
  completed: boolean
}