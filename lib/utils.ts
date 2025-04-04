import { Blog, BlogContent } from "@/constants/Blogs/blog"
import { Option } from "@/constants/Blogs/blogOptions"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as randomID } from "uuid"
import { formatDistance } from "date-fns"

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTailwind = (options: Option[], title: string, value: string): string => {
  return options.find(option => option.title === title)?.options?.find(option => option.value === value)?.tailwind || ""
}

export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

type ZipImage = {
  name: string;
  data: string;
}

export const processBlog = (blog: Blog, blogName: string) => {
  const blogID = blog.id || randomID();
  blog.id = blogID;

  const images: ZipImage[] = [];

  //set blog date to todays date in YYYY-MM-DD format
  if (!blog.date) {
    blog.date = new Date().toISOString().split("T")[0];
  }

  if (blog.headerSrc && blog.headerData) {
    images.push({ name: blog.headerSrc, data: blog.headerData.split(",")[1]})
    blog.headerData = undefined
    blog.headerSrc = `/blogs/${blogName}/${blog.headerSrc}`
  }

  blog.content.forEach((item: BlogContent) => {
    if (item.type === 'IMAGE' && item.imgData) {
      images.push({ name: item.src, data: item.imgData.split(",")[1] });
      item.imgData = undefined
      item.src = `/blogs/${blogName}/${item.src}`;
    } else if (item.type === "PARAGRAPH" && item.imgData) {
      images.push({ name: item.src!, data: item.imgData.split(",")[1] });
      item.imgData = undefined
      item.src = `/blogs/${blogName}/${item.src}`;
    }
  });

  return { blog, images, blogName };
}

export const createZip = async (blog: Blog, images: ZipImage[], blogName: string) => {
  const zip = new JSZip();

  // Add the TypeScript file with the modified JSON
  zip.file(`${blogName}.ts`, `export const ${blogName} = ${JSON.stringify(blog, null, 2)};`);

  // Add the images to the ZIP
  images.forEach(image => {
    console.log(image.data)
    zip.file(`${blogName}/${image.name}`, image.data, { base64: true });
  });

  // Generate the ZIP file
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, `${blogName}.zip`);
}

export const daysAgo = (date: Date): string => {
  return formatDistance(date, new Date(), { addSuffix: true })
} 

export type Image = File | null

export const uploadImage = async (image: Image): Promise<string> => {
  if (!image) return "-";

  const formData = new FormData();
  formData.append("image", image); // 'image' should match your backend's expected field name

  const { link } = await (await fetch("/api/image/new", {
    method: "POST",
    body: formData,
  })).json()

  return link
}

export const sendMail = (to: string, subject: string, message: string) => {
  
}