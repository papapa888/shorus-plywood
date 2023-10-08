"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import OsbProductDetails from "@/components/OsbProductDetails";
import film1 from "/public/mdf/mdf1-min.jpg";
import film2 from "/public/mdf/mdf1-transformed-min.jpeg";
import film3 from "/public/mdf/mdf2large-min.jpg";

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
    tabName: "MDF",
    url: "/products/fiberboard/mdf",
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
  title: "MDF",
  cardDescription:
    "MDF delivers unmatched consistency and a sleek surface that welcomes your creative touch",
  cardContent:
    "Engineered from finely processed wood fibers, MDF ensures uniform density and a pristine surface ready for finishing. Embrace its adaptability for everything from bespoke furniture to intricate woodwork. MDF: the trusted choice for artisans who demand excellence. Surfaces can be laminated or post processed for meeting different aesthetics needs.",
  productDetails: {
    size: "1220mm x 2440mm, 1250mm x 2500mm, 1830mm x 3660mm / customizable",
    thickness: "2.4mm - 25mm",
    grade: "Raw MDF, Melamine MDF ,Slot MDF",
    standard: "IHPA, HPVA,BSI",
    glue: "E-1, E-2, E-0, CARB P2",
    density: "820-840kg/M3 for thin panels and 730kg/M3 for thick  panels",
    species: "Poplar, Pine",
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
