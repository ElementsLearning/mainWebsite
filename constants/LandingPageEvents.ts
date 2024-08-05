export type Event = {
  name: string
  innerColor: string
  color: string
  src: string
  gallery: string[]
  additional?: {
    date: string
    desc?: string
  }
}

export const LandingPageEvents: Event[] = [
  {
    name: "Jhang Session",
    innerColor: "#B1DA94",
    color: "#CFE8BE",
    src: "/driveT/Jhang/4.JPG",
    additional: {
      date: "November 2023",
    },
    gallery: [
      "/driveT/Jhang/1.JPG",
      "/driveT/Jhang/2.JPG",
      "/driveT/Jhang/3.JPG",
      "/driveT/Jhang/5.JPG",
      "/driveT/Jhang/6.JPG",
      "/driveT/Jhang/7.JPG",
      "/driveT/Jhang/8.JPG",
      "/driveT/Jhang/9.JPG",
    ]
  },
  {
    name: "Chinot Session",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/driveT/Chinoit/2.JPG",
    additional: {
      date: "November 2023",
      desc: ""
    },
    gallery: [
      "/driveT/Chinoit/1.JPG",
      "/driveT/Chinoit/3.JPG",
      "/driveT/Chinoit/4.JPG",
      "/driveT/Chinoit/5.JPG",
      "/driveT/Chinoit/6.JPG",
      "/driveT/Chinoit/7.JPG",
      "/driveT/Chinoit/8.JPG",
    ]      
  },
  {
    name: "Attock Session",
    innerColor: "#B1DA94",
    color: "#CFE8BE",
    src: "/driveT/Attock/9.JPG",
    additional: {
      date: "November 2023",
      desc: ""
    },
    gallery: [
      "/driveT/Attock/1.JPG",
      "/driveT/Attock/2.JPG",
      "/driveT/Attock/3.JPG",
      "/driveT/Attock/4.JPG",
      "/driveT/Attock/5.JPG",
      "/driveT/Attock/6.JPG",
      "/driveT/Attock/7.JPG",
      "/driveT/Attock/8.JPG",
      "/driveT/Attock/10.jpg",
      "/driveT/Attock/11.JPG",
      "/driveT/Attock/12.JPG",
      "/driveT/Attock/14.jpg",
      "/driveT/Attock/15.jpg",
      "/driveT/Attock/16.jpg",
    ]
  },
  {
    name: "FDE CFC Session",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/driveT/FDECFC/4.jpg",
    additional: {
      date: "January 2024",
      desc: ""
    },
    gallery: [
      "/driveT/FDECFC/1.jpg",
      "/driveT/FDECFC/2.jpg",
      "/driveT/FDECFC/3.jpg",
      "/driveT/FDECFC/4.jpg",
      "/driveT/FDECFC/5.JPG",
      "/driveT/FDECFC/6.JPG",
      "/driveT/FDECFC/7.JPG",
      "/driveT/FDECFC/8.JPG",
      "/driveT/FDECFC/9.JPG",
      "/driveT/FDECFC/10.JPG",
    ]
  },
  {
    name: "AJK Session",
    color: "#A7E4F9",
    innerColor: "#6DD1F5",
    src: "/driveT/AJK/2.jpg",
    additional: {
      date: "March 2024",
      desc: ""
    },
    
    gallery: [
      "/driveT/AJK/1.jpg",
      "/driveT/AJK/3.jpg",
      "/driveT/AJK/4.jpg",
      "/driveT/AJK/5.jpg",
    ]      
  },
  {
    name: "Lahore Science Mela",
    innerColor: "#B1DA94",
    color: "#CFE8BE",
    src: "/drive/LahoreScienceMela/4.jpg",
    additional: {
      date: "November 2023",
    },
    gallery: [
      "/drive/LahoreScienceMela/0.jpg",
      "/drive/LahoreScienceMela/1.jpg",
      "/drive/LahoreScienceMela/2.jpg",
      "/drive/LahoreScienceMela/3.jpg",
      "/drive/LahoreScienceMela/4.jpg",
    ]
  },
  {
    name: "Murrabi Winter Camp",
    color: "#FEE7BD",
    innerColor: "#FED792",
    additional: {
      date: "November 2023",
    },
    src: "/drive/MurrabiWinterCamp/0.jpg",
    gallery: [
      "/drive/MurrabiWinterCamp/0.jpg",
      "/drive/MurrabiWinterCamp/1.jpg",
      "/drive/MurrabiWinterCamp/2.jpg",
      "/drive/MurrabiWinterCamp/3.jpg",
      "/drive/MurrabiWinterCamp/4.jpg",
    ]      
  },
  // {
  //   name: "MS Office Workshop",
  //   color: "#F8A6D6",
  //   innerColor: "#F46CBE",
  //   src: "/drive/MSOfficeWorkshop/0.jpg",
  //   gallery: [
  //     "/drive/MSOfficeWorkshop/0.jpg",
  //     "/drive/MSOfficeWorkshop/1.jpg",
  //     "/drive/MSOfficeWorkshop/2.jpg",
  //     "/drive/MSOfficeWorkshop/3.jpg",
  //     "/drive/MSOfficeWorkshop/4.jpg",
  //   ]            
  // },
  {
    name: "AC Attock Visit",
    innerColor: "#B1DA94",
    color: "#CFE8BE",
    src: "/drive/ACAttockVisit/0.jpg",
    gallery: [
      "/drive/ACAttockVisit/0.jpg",
      "/drive/ACAttockVisit/1.jpg",
      "/drive/ACAttockVisit/2.jpg",
      "/drive/ACAttockVisit/3.jpg",
      "/drive/ACAttockVisit/4.jpg",
    ]            
  },
  {
    name: "CEO of CEF Visit",
    color: "#CAB9DB",
    innerColor: "#A98CC2",
    src: "/drive/CEOCEFVisit/0.jpg",
    gallery: [
      "/drive/CEOCEFVisit/0.jpg",
      "/drive/CEOCEFVisit/1.jpg",
      "/drive/CEOCEFVisit/2.jpg",
      "/drive/CEOCEFVisit/3.jpg",
      "/drive/CEOCEFVisit/4.jpg",
    ]            
  },
  // {
  //   name: "RWU Jobfair 2024",
  //   color: "#F8A6D6",
  //   innerColor: "#F46CBE",
  //   src: "/drive/RWU/0.jpg",
  //   gallery: [
  //     "/drive/RWU/0.jpg",
  //     "/drive/RWU/1.jpg",
  //     "/drive/RWU/2.jpg",
  //     "/drive/RWU/3.jpg",
  //   ]            
  // },
].reverse()