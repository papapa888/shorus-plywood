"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import OsbProductDetails from "@/components/OsbProductDetails";
import film1 from "/public/uvmdf/uvmdf1.jpeg";
import film2 from "/public/uvmdf/uvmdf2.jpg";
import film3 from "/public/uvmdf/uvmdf3.jpeg";

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
    url: "/products/fiberboard/uvmdf",
  },
];

const filmPly = [
  {
    img: film1,
    alt: "fan of mdf panels",
  },
  {
    img: film2,
    alt: "stack of three panel of mdf panel",
  },
  {
    img: film3,
    alt: "stack of mdf panels",
  },
];

const product = {
  title: "UV MDF",
  cardDescription:
    " UV coating is applied to the surface of fiber boards, making it an ideal choice for furniture.",
  cardContent:
    "Similar to UV plywood boards , the same UV coating is applied to the surface of fiber boards. The UV coating used in UV plywood production provides several advantages, including a smooth and glossy finish, excellent durability, resistance to scratches and fading, and the ability to create visually appealing and modern designs.",
  productDetails: {
    size: "1220mm x 2440mm, 1250mm x 2500mm, 1830mm x 3660mm / customizable",
    thickness: "3mm, 4.7mm, 2.5mm ~ 6 mm",
    grade: `Melamine paper , Pure Color, Wood veneer finish on face/back`,
    standard: "IHPA, HPVA,BSI",
    glue: "E0, E1, E2",
    density: "950kg/M3 up",
    species: "MDF",
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
