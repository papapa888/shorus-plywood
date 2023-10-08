"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import film1 from "/public/hpl/hpl3.jpg";
import film2 from "/public/hpl/hpl1.jpg";
import film3 from "/public/hpl/hpl2.jpg";
import eggwhite from "/public/hpl/eggwhite.jpg"
import skyblue from "/public/hpl/skyblue.jpg"
import glossbrown from "/public/hpl/gloss-brown.jpg"

import { useState } from "react";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import FaceSelection from "@/components/FaceSelection";
import SideMenu from "@/components/Sidemenu";

const faceSelection = [

  {
    color:'Egg White',
    img: eggwhite

  },
  {
    color:'Sky Blue',
    img: skyblue

  },
  {
    color:'Gloss Brown',
    img: glossbrown

  },

]

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
    tabName: "HPL Plywood",
    url: "/products/plywood/hplplywood",
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
  title: "High-Pressure Laminate (HPL) plywood",
  cardDescription: "Combines the strength of plywood with the beauty and resilience of a high-pressure laminate surface.",
  cardContent:
    "Plywood that excels in kitchens, bathrooms, and commercial spaces. HPL plywood is a versatile choice for cabinetry, countertops, and furniture, thanks to its resistance to moisture, stains, and daily wear and tear. Elevate your interior design with the lasting elegance and robust performance of HPL plywood.",
  productDetails: {
    size: "1220mm x 2440mm / customizable",
    thickness: "11.5mm, 12mm, 16.5mm, 18mm, 21mm / customizable",
    grade: "A/A",
    standard: "BSI",
    glue: "E-1, E-2, E-0, CARB P2",
    faceBack:
      "Egg White, Pure White, Glossy/Matt, etc",
    species: " Poplar, Tropical Hardwood, Okoume",
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
