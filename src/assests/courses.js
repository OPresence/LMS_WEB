import { v4 as uuidv4 } from "uuid";
let courses = [
  {
    title: "Secrets of OI data",
    description:
      "The Web Design BootCamp-2022 for Beginners is a comprehensive training program that equips individuals with the foundational skills to create attractive and functional websites.",
    price: 309,
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "web-design.png",
    updatedAt: "2/12/2023",
    duration: "3 hr",
    level: "Intermediate",
    lectures: 5,
    language: "English",
    enrolled: 10,
    instructor: {
      imgUrl: "",
      name: "Omkar Patil",
      overview:
        "World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities",
      students: 134,
      tutorials: 2,
      rating: 4.7,
    },
  },
  // {
  //   title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
  //   description:
  //     "The Web Design BootCamp-2022 for Beginners is a comprehensive training program that equips individuals with the foundational skills to create attractive and functional websites.",
  //   price: 499,
  //   lesson: 12,
  //   students: 12.5,
  //   rating: 5.9,
  //   imgUrl: "graphics-design.png",
  //   updatedAt: "2/12/2023",
  //   duration: "51 mins",
  //   level: "Basic",
  //   lectures: 4,
  //   language: "Hinglish",
  //   enrolled: 15,
  //   instructor: {
  //     imgUrl: "",
  //     name: "Omkar Patil",
  //     overview:
  //       "World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities",
  //     students: 134,
  //     tutorials: 2,
  //     rating: 4.7,
  //   },
  // },
  // {
  //   title: "UI/UX BootCamp for Beginners in 2022",
  //   description:
  //     "The Web Design BootCamp-2022 for Beginners is a comprehensive training program that equips individuals with the foundational skills to create attractive and functional websites.",
  //   price: 1999,
  //   lesson: 12,
  //   students: 12.5,
  //   rating: 5.9,
  //   imgUrl: "ui-ux.png",
  //   updatedAt: "2/12/2023",
  //   duration: "1 month",
  //   level: "Expert",
  //   lectures: 10,
  //   language: "English",
  //   enrolled: 20,
  //   instructor: {
  //     imgUrl: "",
  //     name: "Omkar Patil",
  //     overview:
  //       "World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities",
  //     students: 134,
  //     tutorials: 2,
  //     rating: 4.7,
  //   },
  // },
  // {
  //   title: "UI/UX BootCamp for Beginners in 2022",
  //   description:
  //     "The Web Design BootCamp-2022 for Beginners is a comprehensive training program that equips individuals with the foundational skills to create attractive and functional websites.",
  //   price: 1999,
  //   lesson: 12,
  //   students: 12.5,
  //   rating: 5.9,
  //   imgUrl: "ui-ux.png",
  //   updatedAt: "2/12/2023",
  //   duration: "1 month",
  //   level: "Expert",
  //   lectures: 10,
  //   language: "English",
  //   enrolled: 20,
  //   instructor: {
  //     imgUrl: "",
  //     name: "Omkar Patil",
  //     overview:
  //       "World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities",
  //     students: 134,
  //     tutorials: 2,
  //     rating: 4.7,
  //   },
  // },
];

courses = courses.map((course, idx) => {
  const id = uuidv4();
  // course["id"] = id;
  course["id"] = idx + 1;
  return course;
});

export default courses;
