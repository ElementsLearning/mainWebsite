"use client"

import { z } from "zod";

export const shopFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().length(11, "Phone number must be 11 digits"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().length(5, "Postal code must be 5 digits"),
    address: z.string().min(1, "Shipping address is required"),
    orderNotes: z.string().optional(),
});

export type ShopFormType = z.infer<typeof shopFormSchema>;