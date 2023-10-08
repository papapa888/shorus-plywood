"use client";
import React, { useState, useEffect, useRef } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

const largeSwiperImages = [
  {
    url: "/images/cabinet2.jpg",
    title: "Direct purchase from factory",
    message:
      "Save money by ordering products directly from manufacture ",
    button: "/products",
  },
  {
    url: "/images/forest2.jpg",
    title: "Commitment to sustainability",
    message:
      "We are proud to source our wood through FSC (Forest Stewardship Council) certified chains, when you choose our products, you're choosing to support sustainable forestry practices and a greener future for our planet",
    button: "/downloads",
  },
  {
    url: "/images/plywood3.jpg",
    title: "Unlock Your Brand's Potential ",
    message:
      "We understand the importance of building a brand that stands out. That's why we're excited to offer you our white labeling practices. With our expertise and your unique vision, we can help you create a product line that bears your brand's name and identity.",
    button: "/products",
  },
];

const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === largeSwiperImages.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === largeSwiperImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? largeSwiperImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[80vh] group ">
      <div className=" relative w-full h-full  ">
        <div
          style={{
            backgroundImage: `url(${largeSwiperImages[currentIndex].url})`,
          }}
          className={
            currentIndex === 2
              ? "w-full h-full bg-center md:bg-center bg-cover bg-no-repeat duration-500 "
              : "w-full h-full bg-right-top md:bg-right bg-cover bg-no-repeat  duration-500"
          }
        >
          <div className="flex flex-col h-full md:absolute md:left-[50%] md:-translate-x-1/2 md:h-[70vh] md:w-[80%]  justify-center gap-4 ">
            <h1 className="md:ml-16 [text-shadow:_3px_2px_2px_black] text-5xl font-extrabold tracking-tight lg:text-5xl text-orange-500 mx-2">
              {largeSwiperImages[currentIndex].title}
            </h1>
            <div className="max-w-lg flex flex-col gap-4 md:ml-16">
              <p className="[text-shadow:_3px_2px_2px_black] leading-7 text-xl text-white drop-shadow-2xl  mt-6 px-5 max-w-lg">
                {largeSwiperImages[currentIndex].message}
              </p>
              <Button className="bg-green-700 w-36 h-10 mx-5  ">
                <Link
                  className="text-md"
                  href={largeSwiperImages[currentIndex].button}
                >
                  Discover More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden rounded-md md:block absolute bottom-0 lg:left-16 left-0 md:left-1 md:top-[50%] w-[80px] h-[80px] bg-black bg-opacity-50 z-10">
        <CaretLeftIcon
          onClick={prevSlide}
          className="w-[60px] h-[80px] stroke-white content-center mx-auto cursor-pointer hover:-translate-x-4 transition delay-300"
        />
      </div>
      <div className="hidden rounded-md md:block absolute bottom-0 lg:right-16 right-0 md:right-1 md:top-[50%] w-[80px] h-[80px] bg-black bg-opacity-50 z-10">
        <CaretRightIcon
          onClick={nextSlide}
          className="w-[60px] h-[80px] stroke-white content-center mx-auto cursor-pointer hover:translate-x-4 transition delay-300"
        />
      </div>
      <div className=" absolute left-[50%] -translate-x-1/2 bottom-3 z-10 ">
        <div className="flex justify-center ">
          {largeSwiperImages.map((slideImage, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={
                currentIndex === slideIndex
                  ? "w-16 h-18 bg-transparent border-orange-400 border-4 rounded-full inline-block mx-1 cursor-pointer"
                  : "w-16 h-18 bg-transparent border-white border-4 rounded-full inline-block mx-1 cursor-pointer"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swiper;
