import Timeline from "./Timeline";
import { Button } from "./ui/button";
import { LayersIcon } from "@radix-ui/react-icons";

const QualityControl = () => {
  return (
    <div className="bg-gray-200 flex-col lg:grid lg:grid-cols-2  overflow-hidden">
      <div className="relative  h-full ] ">
        <video
          className="object-cover w-full h-full "
          muted
          autoPlay
          loop
          typeof="video/mp4"
        >
          <source
            about="quality control video of making plywood"
            src={require("/public/images/quality-control-vid.mp4")}
          />
        </video>
        <div className="absolute  pt-6 gap-2 z-10 top-0 left-[50%] -translate-x-[50%] w-full h-full">
          <div className="flex flex-col justify-start h-full [text-shadow:_3px_2px_2px_black]  items-center gap-4">
            <h1 className=" text-white text-5xl font-extrabold tracking-tight lg:text-6xl">
              Quality Control
            </h1>
            <h2 className="text-white text-xl font-extrabold tracking-tight lg:text-3xl">
              every step of the process
            </h2>

            <div className="justify-self-stretch text-center flex-col ">
              <h2 className="text-white md:text-2xl leading-8 mx-auto w-[90%] [&:not(:first-child)]:mt-8 pt-12 pb-12">
                Plywood quality control is a rigorous process that involves
                meticulous inspections at every stage of production, from
                sourcing raw materials to final product assembly. This
                unwavering commitment to quality ensures that each plywood sheet
                meets strict industry standards, guaranteeing structural
                integrity, durability, and customer satisfaction.
              </h2>
              <Button className='bg-green-700' variants='outline' size='lg' >
                <LayersIcon className="mr-2 h-5 w-5"/>
                Check out product range
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <Timeline/>
      </div>
    </div>
  );
};

export default QualityControl;
