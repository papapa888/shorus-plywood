import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import factory from "/public/images/factory-min.jpg";
import Breadcrumb from "@/components/Breadcrumb";
import check1 from "/public/images/18192-min.png";
import check2 from "/public/images/18193-min.png";
import check3 from "/public/images/18194-min.png";
import check4 from "/public/images/18195-min.png";

const navTab = [
  {
    tabName: "Home",
    url: "/",
  },
  {
    tabName: "About Us",
    url: "/applications",
  },
];

const page = () => {
  return (
    <div className="pb-20">
      <div className=" h-80  bg-[url('/images/handshake.jpeg')] bg-cover md:bg-bottom flex items-center justify-center relative overflow-hidden">
        <h1 className="  scroll-m-20 text-white [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          About Us
        </h1>
      </div>

      <Container>
        <Breadcrumb navTab={navTab} />
        <div className="flex-col flex gap-10">
          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0  pt-10">
              Factory
            </h2>
            <div className="leading-7 my-6 px-2 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Image src={factory} className="max-h-72" />
              </div>
              <div className="flex flex-col gap-8 indent-6">
                <span>
                  Shorus wood is a large-scale plywood and timber manufacturer,
                  which is founded in 2007, one of the earliest timber
                  production factory in Linyi. Our company occupy more than
                  20,000 square meters. We have 16 professional technicians, 380
                  skilled workers. Our popular brands include SHORUS PLEX,
                  MARINA PLUS, TEMAX PLEX, BULL PLEX and MODERN PLEX etc, which
                  are renowned for its excellent quality and complete service in
                  wood products industry.
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 px-2 pt-10">
              Company philosophy
            </h2>

            <div className="px-2 md:grid md:grid-cols-2">
              <div className="pt-6 flex-col gap-8 flex">
                <span>
                  Shorus adhering to local laws, regulations, and standards to
                  ensure ethical business practices, product quality, safety,
                  and environmental responsibility.
                </span>
                <h2>Regulatory Compliance:</h2>
                <ul className="list-disc flex flex-col gap-4">
                  <li className="ml-8">
                    Ensure compliance with all relevant local, national, and
                    international laws and regulations governing manufacturing,
                    environmental impact, labor practices, and product safety.
                  </li>
                  <li className="ml-8">
                    Abide by environmental regulations concerning air and water
                    quality, waste management, emissions, and sustainable
                    sourcing of wood materials.
                  </li>
                  <li className="ml-8">
                    Comply with safety regulations to protect employees and
                    customers, including machinery safety, fire safety, and
                    occupational health and safety standards.
                  </li>
                  <li className="ml-8">
                    exporting or importing plywood products, adhere to trade and
                    customs regulations and tariffs.
                  </li>
                </ul>
                <div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight py-6">
                    Strict Quality Control
                  </h3>
                  <span>
                    Extensive testing equipment are necessary guarantee for
                    manufacturing high-quality products, the company attaches
                    great importance to the modernization of production
                    equipment to ensure high output whilst reducing waste. We
                    have 8 advanced production lines, the annual production
                    ability is 80,000cbm. Products have been exported to Asia,
                    America, Middle east, Africa, and Europe.
                  </span>
                </div>
              </div>
              <div className=" leading-7 my-6 px-2 grid grid-cols-2">
                <Image alt="picture of thickness test" src={check1} />
                <Image alt="picture of moisture test" src={check2} />
                <Image alt="picture of stree test" src={check3} />
                <Image alt="picture of visual test" src={check4} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
