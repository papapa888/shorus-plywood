import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import heroImage from "/public/images/plywood-hero-banner.jpg";
import plywoodData from "./data";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <Container>
        <div className="mx-auto h-[400px] relative">
          <Image
            className=" object-cover  w-full h-full md:object-left-bottom"
            src={heroImage}
            alt="picture of plywood"
            priority={true}
          />
          <div className="absolute top-0 left-[50%] -translate-x-[50%] gap-8  text-center flex flex-col justify-center h-full text-white ">
            {/* <h1 className="whitespace-nowrap scroll-m-20 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-white text-4xl font-extrabold md:tracking-tight lg:text-5xl [text-shadow:_3px_2px_2px_black] z-10 ">
              Plywood Selections
            </h1> */}
            <h1 className="whitespace-nowrap scroll-m-20  text-4xl font-extrabold md:tracking-tight md:text-5xl [text-shadow:_3px_2px_2px_black]">
              Plywood Selection
            </h1>
            <h2 className="max-w-md md:text-lg leading-7 [text-shadow:_3px_2px_4px_black]">
              Selecting the perfect plywood is a crucial step in ensuring the
              success of your projects. At Shorus Plywood, we understand that
              each project has unique requirements, and the plywood you choose
              can make all the difference
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
          {plywoodData.map((plywoodData, plywoodIndex) => (
            <div className="group" key={plywoodIndex}>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  className=" rounded-lg  group-hover:scale-110 duration-300"
                  src={plywoodData.productImage}
                  alt={plywoodData.productName}
                  priority={true}
                />
                <div className="absolute bottom-0 w-full bg-gray-900 h-[30%] group-hover:opacity-80 duration-300 group-hover:h-full opacity-60 z-10">
                  <Link
                    href={plywoodData.url}
                    className="flex flex-col pt-2  scroll-m-20  justify-center gap-12 items-center   text-white text-3xl font-extrabold md:tracking-tight lg:text-3xl [text-shadow:_3px_2px_2px_black] cursor-pointer text-center w-full h-full group-hover:text-orange-400 group-hover:items-center"
                  >
                    {plywoodData.productName}
                    <h1 className="px-6 leading-loose hidden group-hover:block  group-hover:text-white group-hover:text-base tracking-wide ">{plywoodData.application}</h1>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
