import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const FaceSelection = ({ plywoodColor }) => {
  return (
    <div className="flex-col items-center w-full text-center my-20 ">
      <h1 className="text-center my-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Veneer selections
      </h1>
      <div className="grid grid-cols-3  gap-4 mb-10">
        {plywoodColor.map((face, faceIndex) => (
          <div className="relative mx-auto " key={faceIndex}>
            <Image className="rounded-md max-w-[100px] max-h-[100px]" alt={face.color} src={face.img} />
            <h3 className="absolute [text-shadow:_3px_2px_2px_black] font-semibold text-white left-[50%] z-10 -translate-x-[50%] top-[50%] -translate-y-[50%]">
              {face.color}
            </h3>
          </div>
        ))}
      </div>
      <Button asChild variant="link">
        <Link  href="https://wa.me/8618251551345">Can't find your preferred veneer choice ? Contact us</Link>
      </Button>
    </div>
  );
};

export default FaceSelection;
