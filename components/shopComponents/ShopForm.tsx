"use client"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ShopFormType, shopFormSchema } from "@/constants/Shop/shopSchema";

import { FormInput } from "./FormInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { defaultCustomer } from "@/constants/Shop/defaultCustomer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

type ShopFormProps = {
    totalAmount: number;
    submitOrder: (data: ShopFormType, paymentImage: File) => void;
    loading: boolean;
};

export function ShopForm({ totalAmount, submitOrder, loading }: ShopFormProps) {
    const [paymentImage, setPaymentImage] = useState<File | null>(null);
    const [infoOpen, setInfoOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);
    const [conditionsChecked, setConditionsChecked] = useState(false);
    const { toast } = useToast();

    const form = useForm<ShopFormType>({
        resolver: zodResolver(shopFormSchema),
        defaultValues: defaultCustomer,
        mode: "onBlur",
    });

    const onSubmit = (data: ShopFormType) => {
        if (paymentImage) {
            submitOrder(data, paymentImage);
        } else {
            toast({
                title: "Payment Proof Required",
                description: "Please upload a payment proof image (smaller than 3MBs).",
                variant: "destructive",
            });
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 3 * 1024 * 1024) { // 3 MB
                toast({
                    title: "Image Too Large",
                    description: "Please upload an image smaller than 3 MB.",
                    variant: "destructive",
                });
                setPaymentImage(null);
            } else {
                setPaymentImage(file);
            }
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FormInput label="Full Name" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <FormInput label="Email" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <FormInput label="Phone Number" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <FormInput label="City" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <FormInput label="Post Code" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FormInput label="Shipping Address" value={field.value} setValue={field.onChange} onBlur={field.onBlur} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex justify-between items-center">
                        <p className="uppercase tracking-widest text-black">Payment Proof</p>
                        <HoverCard open={infoOpen} onOpenChange={setInfoOpen}>
                            <HoverCardTrigger onClick={() => setInfoOpen(!infoOpen)} className="cursor-pointer">
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
                                        <p>Elements Learning (Pvt) Limited</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">Account IBAN</p>
                                        <p>PK53ALFH5627005001269166</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">Bank</p>
                                        <p>Bank Alfalah Islamic</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">Branch Code</p>
                                        <p>5627</p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="orderNotes"
                    render={({ field }) => (
                        <FormItem>
                            <p className="uppercase tracking-widest text-black">Additional Notes</p>
                            <FormControl>
                                <Textarea rows={3} placeholder="Message Here (optional)" {...field} className="border p-2 rounded-md text-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-2 items-center">
                    <Input
                        className="size-4"
                        type="checkbox"
                        id="terms"
                        checked={conditionsChecked}
                        onChange={(e) => setConditionsChecked(e.target.checked)}
                    />
                    <label htmlFor="terms" className="text-sm sm:text-base flex-1 flex flex-wrap gap-2">
                        <HoverCard open={termsOpen} onOpenChange={setTermsOpen}>
                            <p className="">
                                I agree to the
                                <span className="mr-2"><HoverCardTrigger onClick={() => setTermsOpen(!termsOpen)} className="text-[#FBBA41] font-bold cursor-pointer"> Terms and Conditions</HoverCardTrigger></span>
                                and confirm payment is complete.
                            </p>
                            <HoverCardContent className="flex flex-col w-96">
                                <TermsAndConditions />
                            </HoverCardContent>
                        </HoverCard>
                    </label>
                </div>
                <button
                    disabled={loading || !conditionsChecked || !paymentImage}
                    type="submit"
                    className="bg-[#404791] disabled:bg-gray-500 text-white font-bold text-2xl px-4 py-2 rounded-full hover:bg-[#6CC3E0] transition duration-300"
                >
                    {!loading ? "Submit" : "Placing Order"}
                </button>
            </form>
        </Form>
    );
}

const TermsAndConditions = () => {
    return (
      <div className="flex flex-col gap-2 text-xs sm:text-sm">
        <p className="font-bold">By placing an order on our website, you agree to the following terms:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Prepayment Required</strong> - We only accept prepaid orders. Payment must be made to the provided bank details before order processing.
          </li>
          <li>
            <strong>Payment Confirmation</strong> - You must upload a valid payment receipt. Orders without a receipt will not be processed.
          </li>
          <li>
            <strong>Processing Time</strong> - Orders are processed within 5-7 working days after payment confirmation.
          </li>
          <li>
            <strong>No Refunds or Cancellations</strong> - Once an order is placed and payment is made, it cannot be canceled or refunded.
          </li>
          <li>
            <strong>Shipping & Delivery</strong> - Delivery times may vary depending on location. You will be notified once your order is shipped.
          </li>
          <li>
            <strong>Contact for Support</strong> - If you have any issues, please contact our support team for assistance.
          </li>
        </ol>
      </div>
    )
  }