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
    tabName: "Laminated veneer lumber",
    url: "/products/laminatedveneerlumber",
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
  title: "Laminated veneer lumber",
  cardDescription:
    "Created by bonding multiple layers of thin wood veneers together using adhesives and heat.",
  cardContent:
    "Laminated Veneer Lumber (LVL) is a versatile engineered wood product commonly used in construction and woodworking. It is created by bonding multiple layers of thin wood veneers together using adhesives and heat. LVL is known for its strength, stability, and versatility. ",
  productDetails: {
    size: "38mm-42mm thickness and 225mm-235mm width lengths:1.0m to 12.0m or as requests",
    thickness: "38mm-42mm ",
    standard:"Osha, ANSI A10.8(US),BS24829(UK),AS1577(AUS)",
    adhesive: "Phenolic adhesive for exterior use",
    edgeSealant:"Acrylic end sealant for additional moisture protection  Edge Branding: Permanent edge branding available at customer  request",
    core: "Radiate Pine Core",
    finish:"Un-Sanded faces, rounded edges, and painted ends"
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
                  <span className="font-semibold ">Standards</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.standard}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Adhesive</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.adhesive}
                  </span>
                </div>
                <Separator />
                <div className="grid grid-cols-3 items-center">
                  <span className="font-semibold ">Edge Banding</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.edgeSealant}
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
                  <span className="font-semibold">Finish</span>
                  <span className="text-left col-span-2">
                    {product.productDetails.finish}
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
