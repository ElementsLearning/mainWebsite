import { Blog, HeaderType, ParagraphType } from "./blog";
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
  text: "",
  size: "BASE",
  weight: "NORMAL",
  style: "NONE",
}

export const defaultHeader: HeaderType = {
  type: "HEADER",
  alignment: "LEFT",
  text: "",
  size: "BASE",
  weight: "BOLD",
  style: "NONE",
}
export const allBlogs: Blog[] = [
  dinosaurExtinction,
  sciencePopularizers,
  missingHumanLink,
  // solarSystem,
]