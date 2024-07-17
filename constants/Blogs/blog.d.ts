export type Blog = {
  id: string
  title: string
  author: string
  date: string
  summary: string
  headerSrc?: string
  content: BlogContent[]
}

export type ParagraphType = {
  type: "PARAGRAPH"
  text: string
  size: "BASE" | "XS" | "SMALL" | "LARGE"
  weight: "NORMAL" | "BOLD" | "SEMIBOLD"
  style: "NONE" | "ITALIC"
  alignment: "LEFT" | "CENTER" | "RIGHT"
}

export type HeaderType = {
  type: "HEADER"
  text: string
  size: "BASE" | "SMALL" | "LARGE" | "HUGE"
  weight: "BOLD" | "NONE" | "SEMIBOLD"
  style: "NONE" | "ITALIC"
  alignment: "LEFT" | "CENTER" | "RIGHT"
}

export type BulletType = {
  type: "BULLET"
  style: "DISCS" | "NONE" | "DOTS" | "NUMBERS" | "LETTERS"
  header?: HeaderType
  points: ParagraphType[]
}

export type ImageType = {
  type: "IMAGE"
  caption?: ParagraphType
  src: string
}

export type IndentedType = {
  indented: boolean
}

export type BlogContent = (ParagraphType | HeaderType | BulletType | ImageType) & IndentedType