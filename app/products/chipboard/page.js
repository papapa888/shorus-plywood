"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import film1 from "/public/chip/chip2.jpeg";
import film2 from "/public/chip/chip1.jpeg";
import film3 from "/public/chip/chip3.jpeg";
import film4 from "/public/chip/chip4.jpeg";
import ChipDataTable from "@/components/ChipDataTable";
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
    tabName: "Chipboard",
    url: "/products/chipboard",
  },
];

const filmPly = [
  {
    img: film2,
    alt: "stack of three panel of chipboard",
  },
  {
    img: film4,
    alt: "stack of chipboard panels",
  },
  {
    img: film1,
    alt: "fan of chipboard panels",
  },
  {
    img: film3,
    alt: "stack of chipboard panels",
  },
];

const product = {
  title: "Chipboard",
  cardDescription:
    "Versatile and cost-effective wood-based product with a wide range of applications. ",
  cardContent:
    "Crafted from wood chips, shavings, and resin, making it a valuable material in woodworking, construction, and interior design. Its affordability, stability, and versatility continue to make it a preferred choice for many applications.",
  productDetails: {
    size: "1220mm x 2440mm, 1250mm x 2500mm, 1830mm x 3660mm / customizable",
    thickness: "2~38mm",
    glue: "MR, E1, E2",
    material: "Poplar/Combi wood",
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
          <Card className=" md:pt-12 mb-16  flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
              <CardDescription>{product.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="sm:min-h-[800px]">
              <p className="mb-8 md:min-h-full">{product.cardContent}</p>
              <ChipDataTable productDetails = {product.productDetails} />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-700">
                <Link href="https://wa.me/8618251551345">
                  <Phone className="mr-2 h-4 w-4" /> Contact us
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default page;
