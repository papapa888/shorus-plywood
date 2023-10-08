"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import film1 from "/public/uv/uv-min.jpg";
import film2 from "/public/uv/uv-fan.jpg";
import film3 from "/public/uv/uv-stack.jpg";
import redwood from "/public/uv/redwood.jpg"
import bintangor from "/public/fancyply/bintangor-min.jpg";
import birch from "/public/fancyply/birch-min.jpg";
import whitewood from "/public/fancyply/cedar-min.jpg";
import okoume from "/public/fancyply/okoume-min.jpg";
import pine from "/public/fancyply/pine-min.jpg";
import poplar from "/public/fancyply/poplar-min.jpg";

import { useState } from "react";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import FaceSelection from "@/components/FaceSelection";
import SideMenu from "@/components/Sidemenu";

const faceSelection = [
  {
    color:'Red Hardwood',
    img: redwood

  },
  {
    color: "Bintangor",
    img: bintangor,
  },
  {
    color: "Birch",
    img: birch,
  },
  {
    color: "White Hardwood",
    img: whitewood,
  },
  {
    color: "Okoume",
    img: okoume,
  },
  {
    color: "Pine",
    img: pine,
  },
  {
    color: "Poplar",
    img: poplar,
  },
];

const navTab = [
  {
    tabName: "Home",
    url: "/",
  },
  {
    tabName: "Products",
    url: "/products",
  },
  {
    tabName: "Plywood",
    url: "/products/plywood",
  },
  {
    tabName: "UV Plywood",
    url: "/products/plywood/uvplywood",
  },
];

const filmPly = [
  {
    img: film3,
    alt: "black film plywood",
  },
  {
    img: film2,
    alt: "black film plywood",
  },
  {
    img: film1,
    alt: "black film plywood",
  },
];

const product = {
  title: " Ultraviolet Cured plywood (UV) plywood",
  cardDescription: "Crafted for both aesthetics and durability, UV plywood stands strong against scratches and fading.",
  cardContent:
    "The UV coating used in UV plywood production provides several advantages, including a smooth and glossy finish, excellent durability, resistance to scratches and fading, and the ability to create visually appealing and modern designs. UV plywood is commonly used in the production of contemporary furniture, cabinetry, interior wall paneling, and architectural accents where a sleek and glossy appearance is desired.",
  productDetails: {
    size: "915x1830mm, 915x2440mm ,1220x1830mm, 1220x2440mm, 1250x2500mm, '3'x6', 4'x8 / customizable",
    thickness: "3.6mm, 11.5mm, 12mm, 16.5mm, 18mm, 21mm, 25mm / customizable",
    grade: "BB/BB, BB/CC,C/D,E/F,A/B,DBB/CC, as per requests",
    standard: "BSI",
    glue: "E-0, E-1, E-2, CARB P2, JAS 4 STAR",
    faceBack:
      "Okoume, Poplar, Birch, Bintangor, Red Hardwood, White hardwood, Pine, etc",
    species: " Poplar, Hardwood, Eucalyptus, Okoume, Birch, Pine, Combi, etc.",
  },
};



const page = () => {
  const [imgIndex, setIndex] = useState(0);

  
  const handleClick = (imgIndex) => {
    setIndex(imgIndex);
  };

  return (
    <div>
      <Container>
        <SideMenu bannerTitle={product.title}/>
        <Breadcrumb  navTab={navTab} />
        <div className="flex-col  md:flex md:flex-row">
          <div className="flex-col md:min-w-[50%] md:pt-12 rounded-lg">
            <div className="max-h-[600px]  max-w-[600px]">
              {
                <Image
                  className="rounded-lg  mb-6"
                  priority={true}
                  alt={filmPly[imgIndex].alt}
                  src={filmPly[imgIndex].img}
                />
              }
            </div>
            <div className="flex gap-5 max-w-[600px] ">
              {filmPly.map((film, filmIndex) => (
                <div
                  className=" rounded-lg bg-gray-100 mb-4 flex items-center  overflow-hidden justify-center "
                  key={filmIndex}
                  onClick={() => handleClick(filmIndex)}
                >
                  <Image
                    className="cursor-pointer  object-cover rounded-lg "
                    src={film.img}
                    alt={film.alt}
                    priority={true}
                  />
                </div>
              ))}
            </div>
            <FaceSelection plywoodColor={faceSelection}/>
          </div>
          <ProductDetails product={product} />
        </div>
       
      </Container>
    </div>
  );
};

export default page;
