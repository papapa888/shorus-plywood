import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import gym from "/public/applicationImg/cement1200-min.jpg";
import plywood from "/public/filmply/film3.jpeg";
import FaceSelection from "@/components/FaceSelection";
import green from "/public/filmply/green.jpg";
import black from "/public/filmply/black.jpg";
import brown from "/public/filmply/black.jpg";
import bslip from "/public/filmply/bslip.jpg";
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
    tabName: "Shuttering",
    url: "/applications/shuttering",
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
    color: "Green",
    img: green,
  },
];

const page = () => {
  return (
    <div>
      <div className=" h-80  bg-[url('/applicationImg/applicationsbanner.jpg')] bg-cover md:bg-bottom flex items-center justify-center relative overflow-hidden">
        <h1 className="  scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Shuttering Plywood
        </h1>
      </div>
      <Container>
        <Breadcrumb navTab={navTab} />
        <h2 className="scroll-m-20  pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0 my-20">
          Shuttering Plywood primarily used in construction and concrete
          formwork applications
        </h2>
        <div className="my-10 mx-auto px-4">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <div className="flex-col flex gap-4 md:col-span-2">
              <div>
                <h2 className="leading-7 ">
                  Its durability and resistance to moisture make it an ideal
                  material for creating temporary molds or frameworks into which
                  concrete is poured and shaped. It is used to form the outer
                  surfaces of walls, columns, beams, and slabs, allowing
                  concrete to be poured and shaped into specific configurations.
                </h2>
              </div>
              <h4 className="leading-7 mt-6 ">
                Our shuttering plywood has a smooth and consistent phenolic
                surface finish which comes in different colors and grades. The
                smoothness of the plywood surface helps achieve a clean and
                uniform concrete surface when the formwork is removed.
              </h4>
              <span className="mt-6  ">
                While shuttering plywood is primarily designed for temporary use
                in concrete formwork, it can be reused for multiple concrete
                pouring applications if handled and maintained properly.
                However, each use may slightly reduce its quality and
                durability.
              </span>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 ">
                Explore the possibilities and advantages of shuttering
                paneling:
              </h4>
              <div className=" flex flex-col gap-8 mt-6 ">
                <div>
                  To prevent moisture from penetrating the edges of the plywood,
                  it is common practice to seal the edges with waterproof paint
                  or sealant. This helps prolong the life of the plywood by
                  reducing the risk of delamination and swelling.
                  <div className="py-6">
                    <h1>Check out our selection</h1>
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
          <div className="md:grid md:grid-cols-5 md:py-10 pt-4">
            <div className="md:col-span-2 flex flex-col justify-center gap-8">
              <div>
                Depending on the level of moisture resistance required , we can also manufacture different types of shuttering plywood designed for various applications. Marine-grade or phenolic film-faced plywood is often used for projects that require high moisture resistance, while standard shuttering plywood is suitable for many construction applications.
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
