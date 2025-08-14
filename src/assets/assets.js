import logo from "./logo1.png";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.png";
import brand_img from "./brand_img1.jpg";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Pentahouse",
    price: "€750,000",
    location: "Berlin",
    image: project_img_1,
  },
  {
    title: "Vista Verde",
    price: "€ 850,000",
    location: "Hamburg",
    image: project_img_2,
  },
  {
    title: "Serenity Suites",
    price: "€ 550,000",
    location: "Hamburg",
    image: project_img_3,
  },
  {
    title: "Central Square",
    price: "€ 650,000",
    location: "Köln",
    image: project_img_4,
  },
  {
    title: "Vista Verde",
    price: "€ 950,000",
    location: "Düsseldorf",
    image: project_img_5,
  },
  {
    title: "Serenity Suites",
    price: "€1,050,000",
    location: "Bremen",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Anna Berger",
    title: "Lehrerin – München",
    image: profile_img_1,
    alt: "Portrait of Anna Berger",
    rating: 5,
    text: "Vom ersten Beratungsgespräch bis zur Schlüsselübergabe lief alles reibungslos. Goldstack Construction hat unser Traumhaus genauso umgesetzt, wie wir es uns vorgestellt haben – professionell, transparent und termingerecht.",
  },
  {
    name: "Markus Schuster",
    title: "IT-Consultant – Hamburg",
    image: profile_img_2,
    alt: "Portrait of Markus Schuster",
    rating: 5,
    text: "Ich war beeindruckt von der Qualität der Ausführung und der offenen Kommunikation während des gesamten Bauprojekts. Das Team war jederzeit erreichbar und ist auf all unsere Wünsche eingegangen. Absolut empfehlenswert!",
  },
  {
    name: "Sabine Köhler",
    title: "Selbstständig – Stuttgart",
    image: profile_img_3,
    alt: "Portrait of abine Köhler",
    rating: 5,
    text: "Goldstack hat aus unseren Ideen ein Zuhause gemacht. Besonders gefallen hat uns die moderne Architektur und wie auf jedes Detail geachtet wurde. Wir fühlen uns rundum wohl und würden jederzeit wieder mit ihnen bauen.",
  },
];
