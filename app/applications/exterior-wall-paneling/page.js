import Container from "@/components/Container";

import Link from "next/link";
import Image from "next/image";

import gym from "/public/applicationImg/outdoor1200-min.jpg";
import plywood from "/public/filmply/film3.jpeg";
import FaceSelection from "@/components/FaceSelection";
import bintangor from "/public/fancyply/bintangor-min.jpg";
import birch from "/public/fancyply/birch-min.jpg";
import ceder from "/public/fancyply/cedar-min.jpg";
import okoume from "/public/fancyply/okoume-min.jpg";
import pine from "/public/fancyply/pine-min.jpg";
import black from "/public/filmply/black.jpg";
import brown from "/public/filmply/black.jpg";
import bslip from "/public/filmply/bslip.jpg";
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
    tabName: "Exterior Wall Paneling",
    url: "/applications/exterior-wall-paneling",
  },
];

const faceSelection = [
  {
    color: "Black",
    img: black,
  },
  {
    color: "Brown",
    img: brown,
  },
  {
    color: "Anti-Slip",
    img: bslip,
  },
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
          Exterior Paneling
        </h1>
      </div>
      <Container>
        <Breadcrumb navTab={navTab} />
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0 my-20">
          Weather the Elements in Style: Exterior Paneling Options
        </h2>
        <div className="my-10 mx-auto px-4">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            
            <div className="flex-col flex gap-4 md:col-span-2">
              <div>
                <h2 className="leading-7 ">
                  External wall panel plywood, often referred to as
                  exterior-grade or sheathing plywood, is a type of plywood
                  specifically designed and manufactured for use in exterior
                  wall applications. It is engineered to withstand exposure to
                  outdoor elements, including moisture, temperature
                  fluctuations, and environmental conditions.
                </h2>
              </div>
              <h4 className="leading-7 mt-6 ">
                Constructed using adhesive and wood veneers that are selected
                for their ability to resist moisture and weathering. This
                plywood is designed to withstand rain, snow, and humidity
                without warping, delaminating, or deteriorating.
              </h4>
              <span className="mt-6  ">
                Typically manufactured using waterproof adhesives, such as
                phenolic or melamine, which provide a strong and durable bond
                between the veneer layers. This adhesive composition ensures the
                plywood remains stable and structurally sound, even when exposed
                to moisture.
              </span>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 ">
                Explore the possibilities and advantages of exterior wall
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
                          className="h-80 w-80"
                        />
                        <h1 className="text-xl font-bold text-center">
                          Film Plywood
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image src={gym} alt="photo of a gym " className="md:col-span-3" />
          </div>
          <div className="md:grid md:grid-cols-5 md:py-10">
            <div className="md:col-span-2 flex flex-col justify-center gap-8">
              <div>
                Surface Treatments: External wall panel plywood often comes with
                factory-applied surface treatments and coatings that enhance its
                weather resistance. These treatments may include water-repellent
                coatings, sealants, or protective layers to prevent water
                penetration.
              </div>
              <div>
                It's important to note that external wall panel plywood still
                needs care to ensure it's longevity , regular check for any gaps
                or joints where water could enter behind the panels. Use an
                appropriate sealant or caulk to seal these areas, ensuring that
                water cannot penetrate the wall system.
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
