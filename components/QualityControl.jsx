import Timeline from "./Timeline";
import { Button } from "./ui/button";
import { LayersIcon } from "@radix-ui/react-icons";
import Container from "./Container";
import { ArrowRight } from "lucide-react";

const QualityControl = () => {
  return (
    <div className="bg-slate-50 flex-col py-10 overflow-hidden">
      <Container>
        <div className="flex flex-col  h-full mb-20  items-center gap-4">
          <h1 className=" text-5xl font-extrabold tracking-tight lg:text-6xl">
            Quality Control
          </h1>
          <h2 className=" text-xl font-extrabold tracking-tight  lg:text-3xl">
            every step of the process
          </h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2">
          <div className="flex flex-col ">
            <div>
              <video
                className="object-scale-down px-2 w-full h-full"
                muted
                autoPlay
                loop
                typeof="video/mp4"
              >
                <source
                  about="quality control video of making plywood"
                  src="https://shorus-plywood.s3.eu-west-2.amazonaws.com/quality-control-vid.mp4"
                />
              </video>
            </div>
          </div>
          <div className="text-center flex flex-col justify-around items-center ">
            <ul className=" list-inside flex flex-col justify-between gap-6 leading-7 my-8 ">
              <li className="px-4 text-start grid grid-cols-5 gap-4 items-center ">
                <ArrowRight className="w-28 text-green-700 min-w-[60px] col-span-1" />
                <span className="col-span-4">
                  Wood Veneers: Inspect incoming wood veneers for defects such
                  as knots, voids, splits, and irregular grain patterns.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 min-w-[60px] col-span-1" />
                <span className="col-span-4">
                  Moisture Content Control: Monitor and control the moisture
                  content of wood veneers to ensure they are within the
                  specified range for proper bonding and dimensional stability.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 min-w-[60px] col-span-1" />
                <span className="col-span-4">
                  Bonding Process: Monitor the adhesive application process to
                  ensure uniform coverage and proper curing of the adhesive.
                  Conduct periodic testing to verify the strength and durability
                  of adhesive bonds.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 min-w-[60px] col-span-1" />
                <span className="col-span-4">
                  Pressing and Curing: Monitor and control the temperature and
                  pressure conditions during the pressing and curing process to
                  ensure proper bonding and reduce the risk of delamination.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 col-span-1 min-w-[60px]" />
                <span className="col-span-4">
                  Surface Quality: Inspect the surfaces of plywood sheets for
                  defects, such as scratches, dents, or surface irregularities.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 col-span-1 min-w-[60px]" />
                <span className="col-span-4">
                  Product Testing: Conduct product testing to assess factors
                  such as tensile strength, shear strength, bending properties,
                  and formaldehyde emissions.
                </span>
              </li>
              <li className="px-4 text-start  grid grid-cols-5 gap-4 items-center">
                <ArrowRight className="w-28 text-green-700 col-span-1 min-w-[60px]" />
                <span className="col-span-4">
                  Continuous Improvement: Regularly review quality control
                  processes and outcomes to identify areas for improvement.
                </span>
              </li>
            </ul>
            <Button className="bg-green-700 w-72 " variants="outline" size="lg">
              <LayersIcon className="mr-2 h-5 w-5" />
              Check out product range
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QualityControl;
