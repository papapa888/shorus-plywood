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
import rosewood from "/public/fancyply/rosewood-min.jpg"
import oak from "/public/fancyply/oak-min.jpg"
import film1 from "/public/engineered/engineered-fancyone.jpg";
import film2 from "/public/engineered/engineered-fancy-wide.jpg";
import film3 from "/public/engineered/engineered-fancy-stack.jpg";
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
  {
    color: "Rosewood",
    img: rosewood,
  },
  {
    color: "Oak",
    img: oak,
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
    tabName: "Engineered Fancy Plywood",
    url: "/products/plywood/engineeredfancyplywood",
  },
];

const filmPly = [
  {
    img: film1,
    alt: "single panel of engineered plywood",
  },
  {
    img: film2,
    alt: "stack of three panel of engineered plywoods",
  },
  {
    img: film3,
    alt: "stack of engineered plywoods",
  },
];

const product = {
  title: "Engineered Fancy Plywood",
  cardDescription: "Engineered veneers offer a higher degree of consistency in color, grain pattern, and thickness compared to natural wood veneers. This consistency makes them an excellent choice for applications where uniformity is desired",
  cardContent:
    "Engineered wood veneer, also known as reconstituted or man-made wood veneer, is a type of veneer that is manufactured by using real wood as the primary source material. Unlike traditional wood veneers, which are sliced or peeled directly from logs, engineered wood veneer is created through a process that involves taking thin layers or fibers of real wood and reassembling them to create veneer sheets.",
  productDetails: {
    size: "1220mm x 2440mm / customizable",
    thickness: "6mm,9mm,12mm,18mm,21mm ",
    grade: "A/B, B/C, C/D, D/E customizable",
    standard: "IHPA, HPVA,BSI",
    glue: "MR, E-1, E-2, E-0",
    faceBack:
      "Red Oak, White Oak, Cherry, Maple, Walnut, Beech, Teak, Straight line, 6Flower, 4Flower , Black Burl, White Burl, Oak, Shapely, Wedge, Rosewood, Zebra, ect",
    species: "Poplar, Hardwood, Eucalyptus, Okoume, Birch, Pine, Combi, etc.",
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
        <SideMenu bannerTitle={"Engineered Fancy Plywood"} />
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
