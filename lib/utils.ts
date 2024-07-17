import { Option } from "@/constants/Blogs/blogOptions"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTailwind = (options: Option[], title: string, value: string): string => {
  return options.find(option => option.title === title)?.options?.find(option => option.value === value)?.tailwind || ""
}
