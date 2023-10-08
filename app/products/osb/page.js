"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import OsbProductDetails from "@/components/OsbProductDetails";
import film1 from "/public/osb/osb1-transformed-min.jpeg";
import film2 from "/public/osb/osb2-transformed-min.jpeg";
import film3 from "/public/osb/osb3-transformed-min.jpeg";
import film4 from "/public/osb/osb4.jpeg";
import film5 from "/public/osb/osb5-transformed-min.jpeg";
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
    tabName: "OSB",
    url: "/osb",
  },
];

const filmPly = [
  {
    img: film2,
    alt: "stack of three panel of fancy plywoods",
  },
  {
    img: film1,
    alt: "single panel of fancy plywood",
  },
  {
    img: film3,
    alt: "stack of fancy plywoods",
  },
  {
    img: film4,
    alt: "stack of fancy plywoods",
  },
  {
    img: film5,
    alt: "stack of fancy plywoods",
  },
];

const product = {
  title: "Oriented Strand Board",
  cardDescription:
    "Plywood with natural wood veneers the perfect choice for furniture",
  cardContent:
    "Fancy plywood, also known as decorative plywood, is known for its attractive veneer finishes. It's used in applications where aesthetics play a significant role. Some common uses include: furniture, interior paneling, architectural accents, doors",
  productDetails: {
    size: "1220mm x 2440mm, 1250mm x 2500mm / customizable",
    thickness: "9mm,12mm,18mm,21mm / customizable",
    grade: "A/B, B/C, C/D, D/E customizable",
    standard: "IHPA, HPVA,BSI",
    glue: "Phenolic, Melamine",
    density: "700kg/M3",
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
          </div>
          <OsbProductDetails product={product} />
        </div>
      </Container>
    </div>
  );
};

export default page;
