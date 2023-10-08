"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import FaceSelection from "@/components/FaceSelection";
import bintangor from "/public/fancyply/bintangor-min.jpg";
import birch from "/public/fancyply/birch-min.jpg";
import ceder from "/public/fancyply/cedar-min.jpg";
import okoume from "/public/fancyply/okoume-min.jpg";
import pine from "/public/fancyply/pine-min.jpg";
import poplar from "/public/fancyply/poplar-min.jpg";
import film1 from "/public/fancyply/fancy-single-sheet.jpg";
import film2 from "/public/fancyply/three-piece-stack.jpg";
import film3 from "/public/fancyply/fancy-stack.jpg";
import SideMenu from "@/components/Sidemenu";

const faceSelection = [
  {
    color: "Bintangor",
    img: bintangor,
  },
  {
    color: "Birch",
    img: birch,
  },
  {
    color: "Ceder",
    img: ceder,
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
    tabName: "Fancy Plywood",
    url: "/products/plywood/fancyplywood",
  },
];

const filmPly = [
  {
    img: film1,
    alt: "single panel of fancy plywood",
  },
  {
    img: film2,
    alt: "stack of three panel of fancy plywoods",
  },
  {
    img: film3,
    alt: "stack of fancy plywoods",
  },
];

const product = {
  title: "Fancy Plywood",
  cardDescription: "Plywood with natural wood veneers the perfect choice for furniture",
  cardContent:
    "Fancy plywood, also known as decorative plywood, is known for its attractive veneer finishes. It's used in applications where aesthetics play a significant role. Some common uses include: furniture, interior paneling, architectural accents, doors",
  productDetails: {
    size: "1220mm x 2440mm / customizable",
    thickness: "6mm,9mm,12mm,18mm,21mm ",
    grade: "A/B, B/C, C/D, D/E customizable",
    standard: "IHPA, HPVA,BSI",
    glue: "MR, E-1, E-2, E-0, CARB P2, JAS 4 STAR",
    faceBack:
      "Red Oak, White Oak, Cherry, Maple, Walnut, Beech, Teak, etc",
    species: "Poplar, Tropical Hardwood, Combi",
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
        <SideMenu bannerTitle={"Fancy Plywood"} />
        <Breadcrumb navTab={navTab} />
        <div className="flex-col  md:flex md:flex-row">
          <div className="flex-col md:min-w-[50%] md:pt-12 rounded-lg">
            <div className="max-h-[600px] max-w-[600px]">
              {
                <Image
                  className="rounded-lg mb-6"
                  priority={true}
                  alt={filmPly[imgIndex].alt}
                  src={filmPly[imgIndex].img}
                />
              }
            </div>
            <div className="flex gap-5 max-w-[600px]">
              {filmPly.map((film, filmIndex) => (
                <div
                  className=" rounded-lg bg-gray-100 mb-4  flex items-center overflow-hidden justify-center"
                  key={filmIndex}
                  onClick={() => handleClick(filmIndex)}
                >
                  <Image
                    className="cursor-pointer object-cover rounded-lg "
                    src={film.img}
                    alt={film.alt}
                    priority={true}
                  />
                </div>
              ))}
            </div>
            <FaceSelection plywoodColor={faceSelection} />
          </div>
          <ProductDetails product={product} />
        </div>
      </Container>
    </div>
  );
};

export default page;
