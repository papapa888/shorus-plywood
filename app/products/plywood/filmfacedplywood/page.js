"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import film1 from "/public/filmply/film1.jpeg";
import film2 from "/public/filmply/film2.jpeg";
import film3 from "/public/filmply/film3.jpeg";
import black from "/public/filmply/black.jpg"
import brown from "/public/filmply/brown.jpg"
import green from "/public/filmply/green.jpg"
import bslip from "/public/filmply/bslip.jpg"
import { useState } from "react";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import FaceSelection from "@/components/FaceSelection";
import SideMenu from "@/components/Sidemenu";

const faceSelection = [

  {
    color:'Black',
    img: black

  },
  {
    color:'Brown',
    img: brown

  },
  {
    color:'Green',
    img: green

  },
  {
    color:'Anti-Slip',
    img: bslip

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
    tabName: "Film Faced Plywood",
    url: "/products/plywood/filmfacedplywood",
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
  title: "Phenolic Film Faced Plywood",
  cardDescription: "Designed for formwork and shuttering",
  cardContent:
    "Primarily known for its use in concrete formwork.Its smooth and moisture-resistant surface, coupled with high structural strength, makes it an ideal choice for creating molds or frames for pouring and shaping concrete",
  productDetails: {
    size: "1220mm x 2440mm / customizable",
    thickness: "6mm,9mm,12mm,18mm,21mm ",
    grade: "A/A",
    standard: "BSI",
    glue: "WBP, MR, E-1. E-2, E-0",
    faceBack:
      "Phenolic film(black or brown)/imported dynea brown  film/anti-slip film (black or brown), Green PP etc.",
    species: "Poplar, Tropical Hardwood, Eucalyptus, Okoume, Birch, Combi",
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
        <SideMenu bannerTitle={"Film Faced Plywood"}/>
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
