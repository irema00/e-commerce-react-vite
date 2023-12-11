/*EDITORS' PICK*/

import accessories from "./assets/editorsPick/accessories.jpg";
import kids from "./assets/editorsPick/kids.jpg";
import women from "./assets/editorsPick/women.jpg";
import men from "./assets/editorsPick/men.jpg";

/* hero2*/
import redcouple from "./assets/redcouple.jpg";

/*BESTSELLER*/
import bs1 from "./assets/bestseller/bs1.png";
import bs2 from "./assets/bestseller/bs2.png";
import bs3 from "./assets/bestseller/bs3.png";
import bs4 from "./assets/bestseller/bs4.png";
import bs5 from "./assets/bestseller/bs5.png";
import bs6 from "./assets/bestseller/bs6.png";
import bs7 from "./assets/bestseller/bs7.png";
import bs8 from "./assets/bestseller/bs8.png";

/*CAROUSEL & HERO*/
import hero2 from "./assets/Carousel/hero2.png";
import slide3 from "./assets/Carousel/slide3.jpg";
import slide2 from "./assets/Carousel/slide2.jpg";
import slide1 from "./assets/Carousel/slide1.jpg";

/*FEATURED*/

/* HEADER*/

/* HERO & CAROUSELS*/

export const carousel1 = {
  title: "SUMMER 2020",
  subTitle: "NEW COLLECTION",
  description:
    "We know how large objects will act, but things on a small scale.",
  imageUrl1: slide1,
  buttonText1: "SHOP NOW",

  imageUrl2: slide2,
  title2: "BLACK FRIDAY",
  description2:
    " We know how large objects will act, but things on a small scale just do not act that way",
  buttonText2: "Start Now",
};

export const carousel2 = {
  title: "SUMMER 2020",
  subTitle: "Vita Classic Product",
  description:
    "We know how large objects will act, We know how are objects will act, We know",
  price: "$16.48",
  imageUrl: slide3,
};

export const partOfTheNeuralUniverse = {
  title: "SUMMER 2020",
  subTitle: "Part of the Neural Universe",
  description:
    "We know how large objects will act, but things on a small scale.",
  imageUrl: redcouple,
  buttons: [
    {
      label: "BUY NOW",
      link: "#",
    },
    {
      label: "READ MORE",
      link: "#",
    },
  ],
};

/*BESTSELLER*/

export const bestsellerData = {
  title: "BESTSELLER PRODUCTS",
  description: "Problems trying to resolve the conflict between",
  products: [
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs1,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs2,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs3,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs4,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs5,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs6,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs7,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: bs8,
    },
  ],
};

export const editorsPick = {
  title: "EDITOR'S PICK",
  description: "Problems trying to resolve the conflict between",
  categories: [
    {
      id: 1,
      title: "MEN",
      imageUrl: men,
      buttonText: "MEN",
    },
    {
      id: 2,
      title: "WOMEN",
      imageUrl: women,
      buttonText: "WOMEN",
    },

    {
      id: 3,
      title: "ACCESSORIES",
      imageUrl: accessories,
      buttonText: "ACCESSORIES",
    },
    {
      id: 4,
      title: "KIDS",
      imageUrl: kids,
      buttonText: "KIDS",
    },
  ],
};
/*FOOTER*/

export const footerData = {
  brandName: "Bandage",
  copyright: "  Made With Love By Finland All Right Reserved",
  buttonText: "Subscribe",
  inputTitle: "Get In Touch",
  inputSubtext: " Lore imp sum dolor Amit",
  footerSections: [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ],
};

export const data = {
  carousel1,
  carousel2,
  partOfTheNeuralUniverse,
  bestsellerData,
  editorsPick,
  footerData,
};
