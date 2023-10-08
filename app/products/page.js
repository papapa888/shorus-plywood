import React from "react";
import { typesOfProducts } from "@/public/menus";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

const product = () => {
  return (
    <div >
      <Container>
      <div className="flex-col text-center mt-8 px-2 my-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Product Catelogue</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to Shorus Plywood, your go-to wholesale supplier for
          high-quality plywood products. We understand the unique needs of
          wholesalers, and we're dedicated to providing you with a comprehensive
          range of plywood options that meet the demands of your business and
          your customers.
        </p>
      </div>
      <div className="flex-col flex gap-8 md:grid md:grid-cols-4 md:gap-4 mb-10">
        {typesOfProducts.map((menuItem, menuIndex) => (
          <div key={menuIndex} className="max-w-[600px] max-h-[600px] relative overflow-hidden group">
            <div>
              <div >
                <Link className="text-white z-10 [text-shadow:_3px_2px_2px_black]  absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center" href={menuItem.href}>
                  {menuItem.types}
                </Link>
                <Image
                  className="object-cover max-full max-full group-hover:scale-110 duration-300 rounded-md"
                  priority={true}
                  src={menuItem.imgUrl}
                  alt={menuItem.types}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default product;
