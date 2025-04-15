export type ShopItemType = {
  name: string
  src: string
  description: string
  price: number
  color: string
  innerColor: string
  images: string[]
}

export const TAX_RATE = 0.18
export const DELIVERY_RATE = 300

export const shopItems: ShopItemType[] = [
  {
    name: "Fraction Board",
    description: "The fraction board provides a tangible representation of fractional concepts through a board divided into equal parts. By playing with the fraction pieces on the board, learners gain a visual understanding of fraction relationships, addition, subtraction, and equivalence.",
    color: "#CFE8BE",
    innerColor: "#B1DA94",
    src: "/whatweofferpage/maths/fraction-board.png",
    price: 1999,
    images: ["/fraction/fraction0.png", "/fraction/fraction1.png", "/fraction/fraction2.png", "/fraction/fraction3.png", "/fraction/fraction4.png"]
  },
  {
    name: "Base-10 Blocks",
    description: " Understand numbers better by using blocks for ones, tens, and hundreds. Count easily and see how multiplication and division work. Move the blocks around to show adding and taking away, making it easier to know what's happening with numbers",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/whatweofferpage/maths/base-10-block.png",
    price: 1999,
    images: ["/baseten/baseten0.png", "/baseten/baseten1.png", "/baseten/baseten2.png", "/baseten/baseten3.png", "/baseten/baseten4.png", "/baseten/baseten5.png", "/baseten/baseten6.png"]
  },
  {
    name: "Tangram",
    description: "The Tangram, an ancient Chinese puzzle, involves seven tans forming various shapes, it nurtures kids spatial awareness, geometry skills, and problem-solving, it also evolves to teach advanced concepts like ated comparison, fractions, and rates.",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/whatweofferpage/maths/tangram.png",
    price: 1999,
    images: ["/tangram/tangram0.png", "/tangram/tangram1.png", "/tangram/tangram2.png", "/tangram/tangram3.png", "/tangram/tangram4.png", "/tangram/tangram5.png"]
  },
  {
    name: "Geoboard",
    description: "A geoboard is a board with pegs arranged in a grid. It's used with rubber bands to create shapes and patterns, teaching geometry basics. It later covers advanced topics like area, perimeter, symmetry, and congruence.",
    color: "#FEE7BD",
    innerColor: "#FED792",
    src: "/whatweofferpage/maths/geoboard.png",
    price: 1599,
    images: ["/geoboard/geoboard0.png", "/geoboard/geoboard1.png", "/geoboard/geoboard2.png", "/geoboard/geoboard3.png", "/geoboard/geoboard4.png", "/geoboard/geoboard5.png"]
  },
  {
    name: "Circular Geoboard",
    description: "A circular geoboard consists of 12 evenly placed pegs forming a circle. Elementary concepts, such as parts of a circle, fractional portions of a circle, angles, and more advanced topics like inscribed triangles within circles. Thale's theorem, approximating pi, and many more, can be demonstrated using rubber bands.",
    color: "#F8A6D6",
    innerColor: "#F46CBE",
    src: "/whatweofferpage/maths/circular-geoboard.png",
    price: 1599,
    images: ["/circular/circular0.png", "/circular/circular1.png", "/circular/circular2.png", "/circular/circular3.png", "/circular/circular4.png", "/circular/circular5.png", "/circular/circular6.png"]
  },
]
