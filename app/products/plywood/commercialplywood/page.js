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
import film1 from "/public/commercial/single-commercial.jpg";
import film2 from "/public/commercial/layered-commercial.jpg";
import film3 from "/public/commercial/size-commercial.jpg";
import film4 from "/public/commercial/stack-commercial.jpg";
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
    tabName: "Commercial Plywood",
    url: "/products/plywood/commercialplywood",
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
  {
    img: film4,
    alt: "stack of fancy plywoods",
  },
];

const product = {
  title: "Commercial Plywood",
  cardDescription: "Commercial plywood is known for its versatility, cost-effectiveness and suitability for a wide range of projects. ",
  cardContent:
    "Commercial plywood is the pragmatic choice for a wide array of projects. This cost-effective plywood boasts a core made of bonded wood veneers, lending it durability without breaking the bank. Its smooth surface makes it ideal for furniture, cabinetry, interior paneling, and DIY ventures. While it excels in interior applications, it's not suitable for structural or moisture-exposed projects. Choose commercial plywood for affordability and adaptability in your next construction or woodworking endeavor.",
  productDetails: {
    size: "915x2135mm, 1220X2440mm, 1220x2500mm/ jumbo size, 4'x9', 5'x8', 4'x12' / customizable",
    thickness: "2.4mm, 6mm, 9mm, 12mm, 18mm, 21mm, 25mm , customizable ",
    grade: "BB/CC, B2, B4, D/E, E/F, Lamination grade is available",
    standard: "BSI, IHPA, HPVA, JPIC",
    glue: "MR, E-1, E-2, E-0, CARB P2, JAS 4 STAR",
    faceBack:
      " Poplar, Birch, Okoume, Bintangor, Pencil Cedar, Pine, etc",
    species: "Poplar, Tropical Hardwood, Birch, Radiate Pine, Combi",
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
        <SideMenu bannerTitle={product.title} />
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
