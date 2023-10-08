import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import gym from "/public/applicationImg/table1200-min.jpg";
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
    tabName: "Furniture",
    url: "/applications/furniture-construction",
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
          Funiture Grade Plywood
        </h1>
      </div>
      <Container>
        <Breadcrumb navTab={navTab} />
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0 my-20">
          Functional Style: Furniture Plywood's Many Facets
        </h2>
        <div className="my-10 mx-auto px-4">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Image src={gym} alt="photo of a gym " className="md:col-span-2" />
            <div className="flex-col flex gap-4 md:col-span-3">
              <div>
                <h2 className="leading-7 ">
                  Traditional diamentional lumber have alway been limited by the
                  width of the tree to create a wider board a carpenter would
                  have to join multiple pieces of lumber thus making them heavy
                  and not easy to work with, at Shorus we provide plywood with
                  both natural and artificial veneer they come in varies
                  diamentions to better fit your needs.
                </h2>
              </div>
              <h4 className="leading-7 mt-6 ">
                Should you want to opt for MDF which is slighter cheaper than
                plywood, we can press veneer of your choosing onto the panel
                forming the end product that fits your specifications.
              </h4>
              <span className="mt-6  ">
                Another point to consider when choosing between plywood or MDF
                is the strenth, plywood can withstand more verticle load
                horizontally , it's more suitable for furniture where strength
                is demanded, on the other hand where strength is not a priority
                either product would do the job just fine.
              </span>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 ">
                Explore the possibilities and advantages of fancy
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
                High-Grade Veneers: The outer veneers of furniture grade plywood
                are carefully selected for their premium appearance. This
                plywood showcases the beauty of wood grain, making it an
                excellent choice for pieces where aesthetics matter.
              </div>
              <div>
                Strong and Stable: Known for its strength and dimensional
                stability, furniture grade plywood resists warping, twisting, or
                shrinking over time, making it ideal for creating durable and
                long-lasting furniture.
              </div>
              <div>
                Exceptional Core Construction: The core layers of this plywood
                are often made from high-quality, void-free wood, providing
                structural integrity and enhancing the overall strength of your
                furniture.
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
