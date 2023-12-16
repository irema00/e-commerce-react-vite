/* CLIENTS*/
import aws from "./assets/clients/aws.png";
import hooli from "./assets/clients/hooli.png";
import noname from "./assets/clients/noname.png";
import lyft from "./assets/clients/lyft.png";
import piedpiper from "./assets/clients/piedpiper.png";
import stripe from "./assets/clients/stripe.png";

/* CATEGORIES */
import ct1 from "./assets/categories/ct1.jpg";
import ct2 from "./assets/categories/ct2.jpg";
import ct3 from "./assets/categories/ct3.jpg";
import ct4 from "./assets/categories/ct4.jpg";
import ct5 from "./assets/categories/ct5.jpg";

/* PRODUCT DETAIL*/

import pr1 from "./assets/productDetail/pr1.jpg";
import pr2 from "./assets/productDetail/pr2.jpg";
import big from "./assets/productDetail/big.jpg";

/*PRODUCT LIST*/

import pl1 from "./assets/productList/pl1.jpg";
import pl2 from "./assets/productList/pl2.jpg";
import pl3 from "./assets/productList/pl3.jpg";
import pl4 from "./assets/productList/pl4.jpg";
import pl5 from "./assets/productList/pl5.jpg";
import pl6 from "./assets/productList/pl6.jpg";
import pl7 from "./assets/productList/pl7.jpg";
import pl8 from "./assets/productList/pl8.jpg";
import pl9 from "./assets/productList/pl9.jpg";
import pla from "./assets/productList/pla.jpg";
import plb from "./assets/productList/plb.jpg";
import plc from "./assets/productList/plc.jpg";

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

import featured1 from "./assets/featured/featured1.jpg";
import featured2 from "./assets/featured/featured2.jpg";
import featured3 from "./assets/featured/featured3.jpg";

/* PRODUCT DETAIL BESTSELLER */

import pdb1 from "./assets/productDetailBestseller/pdb1.jpg";
import pdb2 from "./assets/productDetailBestseller/pdb2.jpg";
import pdb3 from "./assets/productDetailBestseller/pdb3.jpg";
import pdb4 from "./assets/productDetailBestseller/pdb4.jpg";
import pdb5 from "./assets/productDetailBestseller/pdb5.jpg";
import pdb6 from "./assets/productDetailBestseller/pdb6.jpg";
import pdb7 from "./assets/productDetailBestseller/pdb7.jpg";
import pdb8 from "./assets/productDetailBestseller/pdb8.jpg";

/* TEAM */
import media1 from "./assets/team/media1.png";
import media2 from "./assets/team/media2.png";
import media3 from "./assets/team/media3.png";
import media4 from "./assets/team/media4.png";
import media5 from "./assets/team/media5.png";
import media6 from "./assets/team/media6.png";
import media7 from "./assets/team/media7.png";
import media8 from "./assets/team/media8.png";

/* HEADER*/

export const headerData = {
  brandName: "Bandage",
  contactNumber: "(225) 555-0118",
  contactEmail: "michelle.rivera@example.com",
  followUsText: "Follow Us and get a chance to win 80% off",
  socialText: "Follow us :",
  loginText: "Login",
  registerText: "Register",
  likeCount: "1",
  cartProductCount: "1",
  menuItems: [
    { name: "home", label: "Home", path: "/" },
    { name: "shop", label: "Shop", path: "/shop" },
    { name: "about", label: "About", path: "/about" },
    { name: "blog", label: "Blog", path: "/blog" },
    { name: "contact", label: "Contact", path: "/contact" },
    { name: "pages", label: "Pages", path: "/pages" },
  ],
};

export const teamData = {
  members: [
    { name: "Jerome Bell", job: "IBM", imageURL: media1 },
    { name: "Brooklyn Simmons", job: "eBay", imageURL: media2 },
    { name: "Ronald Richards", job: "Starbucks", imageURL: media3 },
    { name: "Floyd Miles", job: "Facebook", imageURL: media8 },
    { name: "Jane Cooper", job: "Mitsubishi", imageURL: media5 },
    { name: "Robert Fox", job: "IBM", imageURL: media6 },
    {
      name: "Leslie Alexander",
      job: "The Walt Disney Company",
      imageURL: media7,
    },
    { name: "Jacop Jones", job: "Starbucs", imageURL: media4 },
  ],
};

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
  firstSlide: {
    title: "SUMMER 2020",
    subTitle: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    backgroundImage: slide3,
    imageUrl: hero2,
    price: "$16.48",
    buttonText: "ADD TO CART",
  },
  secondSlide: {
    title: "BLACK FRIDAY",
    description:
      "We know how large objects will act, but things on a small scale just do not act that way.",
    imageUrl: slide2,
    buttonText: "Start Now",
  },
};

export const containerFluid = {
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
  topTitle: "Featured Products",
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

/*EDITORS' PICK*/

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

export const featuredPostsData = {
  topTitle: "Practice Advice",
  title: "Featured Posts",
  description1: "Problems trying to resolve the conflict between",
  description2:
    "the two major realms of Classical physics: Newtonian mechanics ",
  posts: [
    {
      id: "featured1",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: 10,
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imageUrl: featured1,
      learnMoreUrl: "#",
    },
    {
      id: "featured2",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: 10,
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imageUrl: featured2,
      learnMoreUrl: "#",
    },
    {
      id: "featured3",
      title: "Loudest à la Madison #1 (L'integral)",
      date: "22 April 2021",
      commentsCount: 10,
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      imageUrl: featured3,
      learnMoreUrl: "#",
    },
  ],
};

export const clientsData = {
  logos: [hooli, lyft, piedpiper, stripe, aws, noname],
};

export const productListData = {
  products: [
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl1,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl2,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl3,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl4,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl5,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl6,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl7,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl8,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pl9,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pla,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: plb,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: plc,
    },
  ],
};

export const productData = {
  productName: "Floating Iphone",
  reviewNumber: "10",
  availability: "In Stock",
  description:
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.",
  imageUrl: [pr1, pr2],
  optionsUrl: [pr1, pr2],
  price: "$1,139.33",
  detailPg:
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  detailImgUrl: big,
  detailTitle: "the quick fox jumps over",
  detailText: "the quick fox jumps over the lazy dog",
};

export const categoryData = [
  {
    id: 1,
    categoryName: "WOMEN",
    itemCount: 5,
    imageUrl: ct1,
  },
  {
    id: 2,
    categoryName: "MEN",
    itemCount: 5,
    imageUrl: ct2,
  },
  {
    id: 3,
    categoryName: "KIDS",
    itemCount: 5,
    imageUrl: ct3,
  },
  {
    id: 4,
    categoryName: "ACCESSORIES",
    itemCount: 5,
    imageUrl: ct4,
  },
  {
    id: 5,
    categoryName: "SALE",
    itemCount: 5,
    imageUrl: ct5,
  },
];

export const productDetailBestsellerData = {
  title: "BESTSELLER PRODUCTS",
  products: [
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb2,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb4,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb5,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb6,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb1,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb7,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb3,
    },
    {
      title: "Graphic Design",
      price: "$16.48",
      newPrice: "$6.48",
      department: "English Department",
      imageUrl: pdb8,
    },
  ],
};

export const data = {
  carousel1,
  carousel2,
  containerFluid,
  bestsellerData,
  editorsPick,
  featuredPostsData,
  footerData,
  clientsData,
  productListData,
  productData,
  categoryData,
  productDetailBestsellerData,
  teamData,
};
