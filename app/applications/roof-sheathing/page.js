import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import gym from "/public/applicationImg/house1200-min.jpg";
import plywood from "/public/commercial/single-commercial.jpg";
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
    tabName: "Roof Sheathing",
    url: "/applications/roof-sheathing",
  },
];

const page = () => {
  return (
    <div>
      <div className=" h-80  bg-[url('/applicationImg/applicationsbanner.jpg')] bg-cover md:bg-bottom flex items-center justify-center relative overflow-hidden">
        <h1 className="  scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Roof Sheathing
        </h1>
      </div>
      <Container>
        <Breadcrumb navTab={navTab} />
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0 my-20">
          Solid Foundations: The Role of Roof Sheathing Panels in Roofing
          Systems
        </h2>
        <div className="my-10 mx-auto px-4">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Image
              src={gym}
              alt="photo of a gym "
              className="md:col-span-2  pb-8"
            />
            <div className="flex-col flex gap-4 md:col-span-3">
              <div>
                <h2 className="leading-7 ">
                  There is growing trend on opting for OSB for roof sheathing
                  due to risk of plywood delaminating over time, this is
                  partially due to roof is very susceptible to rain, at Shorus
                  we can manufacture plywood with high moisture resistant
                  properties if needed.
                </h2>
              </div>
              <h4 className="leading-7 mt-6 ">
                In addition to supporting the roofing materials, roof sheathing
                contributes to the structural stability of the roof. It helps
                transfer loads (such as snow, wind, and rain) to the roof
                framing, preventing sagging or structural damage. If stength is
                main concern a thicker plywood might be best option.
              </h4>
              <span className="mt-6  ">
                Another point to consider when choosing between plywood or MDF
                is the strenth, plywood can withstand more verticle load
                horizontally , it's more suitable for furniture where strength
                is demanded, on the other hand where strength is not a priority
                either product would do the job just fine.
              </span>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 ">
                Explore the possibilities of roof sheathing panels:
              </h4>
              <div className=" flex flex-col gap-8 mt-6 ">
                <div>
                  <h1>
                    Plywood: Plywood roof sheathing is known for its strength
                    and durability. It is available in various thicknesses and
                    grades and is a popular choice for residential and
                    commercial roofs.
                  </h1>
                  <h1 className="my-10">
                    OSB (Oriented Strand Board): OSB is made from compressed
                    wood strands and adhesive. It is cost-effective and widely
                    used in construction. OSB roof sheathing is suitable for
                    many roofing applications.
                  </h1>

                  <div className="py-6">
                    <h1>Check out our plywood and OSB products:</h1>
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
                          src={osb}
                          alt="photo of osb with colorful OSB panel"
                        />
                        <h1 className="text-xl font-bold text-center">OSB</h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
