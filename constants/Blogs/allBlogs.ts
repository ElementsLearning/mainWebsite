import { Blog, BulletType, HeaderType, ParagraphType } from "./blog";
import { dinosaurExtinction } from "./dinosaurExtinction";
import { missingHumanLink } from "./missingHumanLink";
import { sciencePopularizers } from "./sciencePopularizers";
import { solarSystem } from "./solarSystem";

export const defaultBlog: Blog = {
  id: "",
  author: "",
  date: Date.now().toString(),
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

export const allBlogs: Blog[] = [
  dinosaurExtinction,
  sciencePopularizers,
  missingHumanLink,
  // solarSystem,
]