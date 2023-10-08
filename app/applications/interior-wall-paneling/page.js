import Container from "@/components/Container";

import Link from "next/link";
import Image from "next/image";

import gym from "/public/applicationImg/gym1200.jpg";
import plywood from "/public/engineered/engineered-fancyone.jpg";
import mdf from "/public/mdf/mdf2large-min.jpg";
import osb from "/public/osb/osb2-transformed-min.jpeg";
import FaceSelection from "@/components/FaceSelection";
import bintangor from "/public/fancyply/bintangor-min.jpg";
import birch from "/public/fancyply/birch-min.jpg";
import ceder from "/public/fancyply/cedar-min.jpg";
import okoume from "/public/fancyply/okoume-min.jpg";
import pine from "/public/fancyply/pine-min.jpg";
import poplar from "/public/fancyply/poplar-min.jpg";
import Breadcrumb from "@/components/Breadcrumb";

const navTab = [
  {
    tabName: "Home",
    url: "/",
  },
  {
    tabName: "Applications",
    url: "/applications",
  },
  {
    tabName: "Interior wall paneling",
    url: "/applications/interior-wall-paneling",
  },
];

const faceSelection = [
  {
    color: "Bintangor",
    img: bintangor,
  },
  {
    color: "Birch",
    img: birch,
  },
  {
    color: "Ceder",
    img: ceder,
  },
  {
    color: "Okoume",
    img: okoume,
  },
  {
    color: "Pine",
    img: pine,
  },
  {
    color: "Poplar",
    img: poplar,
  },
];

const page = () => {
  return (
    <div>
      <div className=" h-80  bg-[url('/applicationImg/applicationsbanner.jpg')] bg-cover md:bg-bottom flex items-center justify-center relative overflow-hidden">
        <h1 className="  scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Interior Application
        </h1>
      </div>
      <Container>
        <Breadcrumb navTab={navTab} />
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0 my-20">
          Discovering timber potential: Interior Transformation Begins Here
        </h2>
        <div className="my-10 mx-auto px-4">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Image src={gym} alt="photo of a gym " className="md:col-span-2" />
            <div className="flex-col flex gap-4 md:col-span-3">
              <div>
                <h2 className="leading-7 ">
                  Wall paneling adds an air of sophistication to any room,
                  transforming plain walls into captivating architectural
                  features. It provides an opportunity to experiment with
                  textures, patterns, and colors, creating a visual focal point.
                </h2>
              </div>
              <h4 className="leading-7 mt-6 ">
                Using OSB in gym creates an understated retro gym vibe paired
                with natural lighing provides an uplifting enviroment
              </h4>
              <span className="mt-6  ">
                Whether you're looking to create a cozy reading nook, a stunning
                entryway, or a serene bedroom retreat, interior wall paneling
                offers a versatile canvas to bring your design dreams to life.
              </span>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 ">
                Explore the possibilities and advantages of interior wall
                paneling:
              </h4>
              <div className=" flex flex-col gap-8 mt-6 ">
                <div>
                  Versatile Materials: Choose from a wide range of materials to
                  match your design vision. Common options include plywood, MDF
                  (Medium-Density Fiberboard) and OSB. Each material offers
                  unique textures and finishes.
                  <div className="py-6">
                    <h1>Check out our plywood,obs and mdf products:</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                      <Link href={"/products/plywood/engineeredfancyplywood"}>
                        <Image
                          src={plywood}
                          alt="photo of plywood with colorful veneer"
                        />
                        <h1 className="text-xl font-bold text-center">
                          Plywood
                        </h1>
                      </Link>
                      <Link href={"/products/plywood/engineeredfancyplywood"}>
                        <Image
                          src={mdf}
                          alt="photo of mdf with colorful veneer"
                        />
                        <h1 className="text-xl font-bold text-center">MDF</h1>
                      </Link>
                      <Link href={"/products/plywood/engineeredfancyplywood"}>
                        <Image
                          src={osb}
                          alt="photo of osb with colorful veneer"
                        />
                        <h1 className="text-xl font-bold text-center">OSB</h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-5 md:py-10">
            <div className="md:col-span-2 flex flex-col justify-center gap-8">
              <div>
                Warmth and Texture: Wooden paneling, in particular, brings
                warmth and texture to spaces. Whether it's rustic reclaimed wood
                or sleek, modern veneers, wood paneling adds depth and character
                to your interiors.
              </div>
              <div>
                {" "}
                Easy Maintenance: Many wall paneling materials are easy to clean
                and maintain. They resist stains, scuffs, and wear, making them
                suitable for high-traffic areas.
              </div>
              <div>
                Whether you're looking to create a cozy reading nook, a stunning
                entryway, or a serene bedroom retreat, interior wall paneling
                offers a versatile canvas to bring your design dreams to life.
              </div>
            </div>
            <div className="md:col-span-3 ">
              <div className="flex flex-col gap-4">
                <FaceSelection plywoodColor={faceSelection} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
