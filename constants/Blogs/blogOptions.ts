export type Option = {
  title: string
  JSONkey: string
  options: {
    name: string
    tailwind: string
    value: string
  }[]
}

export const paragraphOptions: Option[] = [
  {
    title: "Font Size",
    JSONkey: "size",
    options: [
      {
        name: "X-Small",
        tailwind: "text-xs md:text-sm xl:text-base",
        value: "XS",
      },
      {
        name: "Small",
        tailwind: "text-sm md:text-base xl:text-lg",
        value: "SMALL",
      },
      {
        name: "Base",
        tailwind: "text-base md:text-lg xl:text-xl",
        value: "BASE",
      },
      {
        name: "Large",
        tailwind: "text-lg md:text-xl xl:text-2xl",
        value: "LARGE",
      },
    ]
  },

  {
    title: "Font Weight",
    JSONkey: "weight",
    options: [
      {
        name: "Normal",
        tailwind: "",
        value: "NORMAL",
      },
      {
        name: "Semibold",
        tailwind: "font-semibold",
        value: "SEMIBOLD",
      },
      {
        name: "Bold",
        tailwind: "font-bold",
        value: "BOLD",
      }
    ]
  },

  {
    title: "Font Style",
    JSONkey: "style",
    options: [
      {
        name: "None",
        tailwind: "",
        value: "NONE"       
      },
      {
        name: "Italic",
        tailwind: "italic",
        value: "ITALIC"
      }
    ]
  },

  {
    title: "Text Alignment",
    JSONkey: "alignment",
    options: [
      {
        name: "Left",
        tailwind: "text-left",
        value: "LEFT"
      },
      {
        name: "Center",
        tailwind: "text-center",
        value: "CENTER"
      },
      {
        name: "Right",
        tailwind: "text-right",
        value: "RIGHT"
      }
    ]
  }
]


export const headerOptions: Option[] = [
  {
    title: "Font Size",
    JSONkey: "size",
    options: [
      {
        name: "Small",
        tailwind: "text-base md:text-lg xl:text-xl",
        value: "SMALL",
      },
      {
        name: "Base",
        tailwind: "text-xl md:text-2xl xl:text-4xl",
        value: "BASE",
      },
      {
        name: "Large",
        tailwind: "text-2xl md:text-3xl xl:text-5xl",
        value: "LARGE",
      },
      {
        name: "Huge",
        tailwind: "text-3xl md:text-5xl xl:text-7xl",
        value: "HUGE",
      },
    ]
  },

  {
    title: "Font Weight",
    JSONkey: "weight",
    options: [
      {
        name: "None",
        tailwind: "",
        value: "NONE"       
      },
      {
        name: "Semibold",
        tailwind: "font-semibold",
        value: "SEMIBOLD"
      },
      {
        name: "Bold",
        tailwind: "font-bold",
        value: "BOLD"
      }
    ]
  },

  {
    title: "Font Style",
    JSONkey: "style",
    options: [
      {
        name: "None",
        tailwind: "",
        value: "NONE"       
      },
      {
        name: "Italic",
        tailwind: "italic",
        value: "ITALIC"
      }
    ]
  },

  {
    title: "Text Alignment",
    JSONkey: "alignment",
    options: [
      {
        name: "Left",
        tailwind: "text-left",
        value: "LEFT"
      },
      {
        name: "Center",
        tailwind: "text-center",
        value: "CENTER"
      },
      {
        name: "Right",
        tailwind: "text-right",
        value: "RIGHT"
      }
    ]
  }
]