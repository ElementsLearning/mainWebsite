export type Blog = {
  id: string
  title: string
  author: string
  date: string
  summary: string
  headerSrc?: string
  headerData?: string
  content: BlogContent[]
}

export type Comment = {
  _id: string
  blogID: string
  name: string
  content: string
  createdAt: Date
  approved: boolean
}

export type ParagraphType = {
  type: "PARAGRAPH"
  text: string
  size: "BASE" | "XS" | "SMALL" | "LARGE"
  weight: "NORMAL" | "BOLD" | "SEMIBOLD"
  style: "NONE" | "ITALIC"
  alignment: "LEFT" | "CENTER" | "RIGHT"
  src?: string
  imgData?: string
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
  points: string[]
  pointStyle: {
    size: "BASE" | "XS" | "SMALL" | "LARGE"
    weight: "NORMAL" | "BOLD" | "SEMIBOLD"
    style: "NONE" | "ITALIC"
    alignment: "LEFT" | "CENTER" | "RIGHT"
  }
}

export type ImageType = {
  type: "IMAGE"
  caption?: ParagraphType
  src: string
  imgData?: string
}

export type IndentedType = {
  indented: boolean
}

export type Editable = {
  editable?: true
  onEdit?: (edited: BlogContent) => void
  moveUp?: (index?: number) => void
  moveDown?: (index?: number) => void
  deleteComponent?: (index?: number) => void
}

export type BlogContent = (ParagraphType | HeaderType | BulletType | ImageType) & IndentedType & Editable