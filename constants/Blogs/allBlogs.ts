import { Blog } from "./blog";
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

export const allBlogs: Blog[] = [
  dinosaurExtinction,
  // sciencePopularizers,
  missingHumanLink,
  // solarSystem,
]