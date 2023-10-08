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
import film1 from "/public/lvl/lvl1-transformed-min.jpeg";
import film2 from "/public/lvl/lvl2-transformed-min.jpeg";
import film3 from "/public/lvl/lvl3-transformed-min.jpeg";
import film4 from "/public/lvl/lvl4-transformed-min.jpeg";
import { Separator } from "@/components/ui/separator";
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
    tabName: "Blockboard",
    url: "/products/blockboard",
  },
];

const filmPly = [
  {
    img: film1,
    alt: "fan of chipboard panels",
  },
  {
    img: film2,
    alt: "stack of three panel of chipboard",
  },
  {
    img: film4,
    alt: "stack of chipboard panels",
  },
  {
    img: film3,
    alt: "stack of chipboard panels",
  },
];

const product = {
  title: "Blockboard",
  cardDescription:
    " resists warping, twisting, and shrinking, even in changing environmental conditions.",
  cardContent:
    "Blockboard is composed of a core made of solid wood blocks or strips that are bonded together with adhesive and enclosed between two outer layers of veneer or plywood. Blockboard is known for its strength, stability, and versatility. ",
  productDetails: {
    size: "1220x2440mm or as requests",
    thickness: "15-18-19,21,25mm ",
    face: " Okoume, Bintangor, Poplar, Birch, Pine, Pencil Cedar...Melamine or Wood Veneer Faced or HPL Faced.",
    veneerGrade: "BB/CC,BB/BB",
    woodCoreStrips: "Square or Half rond ,no worm, no gap",
    glue: "MR. E0,E1,E2",
    edgeSealant:
      "Acrylic end sealant for additional moisture protection  Edge Branding: Permanent edge branding available at customer  request",
    core: "Poplar/Pine/Paulownia/Fir/Falcata",
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
              <div className="flex flex-col gap-5 leading-normal text h-full ">
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Size</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.size}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Thickness</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.thickness}{" "}
                  </span>
                </div>

                <Separator />

                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Veneer Species</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.face}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Veneer Grade</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.veneerGrade}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">glue</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.glue}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold">Core</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.core}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold">Wood Core Strips</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.woodCoreStrips}
                  </span>
                </div>
                <Separator />
              </div>
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
