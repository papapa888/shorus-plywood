"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import OsbProductDetails from "@/components/OsbProductDetails";
import film1 from "/public/hardboard/hardboard1-transformed-min.jpeg";
import film2 from "/public/hardboard/hardboard2-transformed-min.jpeg";
import film3 from "/public/hardboard/hardboard3-min.jpeg";

import SideMenu from "@/components/Sidemenu";

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
    tabName: "Fiber Board",
    url: "/products/fiberboard",
  },
  {
    tabName: "Hardboard",
    url: "/products/fiberboard/hdf",
  },
];

const filmPly = [
  {
    img: film2,
    alt: "stack of three panel of mdf panel",
  },
  {
    img: film1,
    alt: "fan of mdf panels",
  },
  {
    img: film3,
    alt: "stack of mdf panels",
  },
];

const product = {
  title: "Hardboard",
  cardDescription:
    " HDF offers remarkable strength and smoothness, making it an ideal choice for furniture.",
  cardContent:
    "High-Density Fiberboard, often referred to as HDF board, is an engineered wood product made from wood fibers, wax, and resin that are compressed and heated to create a dense and sturdy board. HDF is known for its uniform composition, smooth surface, and versatility, making it a popular choice in various applications.",
  productDetails: {
    size: "1220mm x 2440mm, 1250mm x 2500mm, 1830mm x 3660mm / customizable",
    thickness: "3mm, 4.7mm, 2.5mm ~ 6 mm",
    grade: `Grade A ~ Standard-glue and wax added less than 25% water absorption,Grade B ~ Tempered more glue and wax added, less than 25% water absorption, Grade ~ C.Perforated,also called pegboard, Grade ~ D.Painted`,
    standard: "IHPA, HPVA,BSI",
    glue: "WBP",
    density: "950kg/M3 up",
    species: "Mixed Hardwood",
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
          </div>
          <OsbProductDetails product={product} />
        </div>
      </Container>
    </div>
  );
};

export default page;
