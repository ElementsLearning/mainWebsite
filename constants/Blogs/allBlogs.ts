import { Blog, BulletType, HeaderType, ImageType, ParagraphType } from "./blog";
import { dinosaurExtinction } from "./dinosaurExtinction";
import { sciencePopularizers } from "./sciencePopularizers";

export const defaultBlog: Blog = {
  id: "",
  author: "",
  date: "",
  title: "",
  summary: "",
  content: [],
}

export const defaultParagraph: ParagraphType = {
  type: "PARAGRAPH",
  alignment: "LEFT",
  text: "This is a paragraph",
  size: "BASE",
  weight: "NORMAL",
  style: "NONE",
}

export const defaultHeader: HeaderType = {
  type: "HEADER",
  alignment: "LEFT",
  text: "This is a header",
  size: "BASE",
  weight: "BOLD",
  style: "NONE",
}

export const defaultBullets: BulletType = {
  type: "BULLET",
  pointStyle: {
    alignment: "LEFT",
    size: "BASE",
    weight: "NORMAL",
    style: "NONE",
  },
  style: "DISCS",
  points: [],
}

export const defaultImage: ImageType = {
  type: "IMAGE",
  src: "",
}

export const allBlogs: Blog[] = [
  dinosaurExtinction,
  sciencePopularizers
  // solarSystem,
]