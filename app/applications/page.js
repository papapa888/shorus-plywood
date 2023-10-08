import Container from "@/components/Container";
import { applicationUses } from "/public/menus";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const page = () => {
  return (
    <div>
      <div className=" h-80  bg-[url('/applicationImg/applicationsbanner.jpg')] bg-cover md:bg-bottom flex items-center justify-center relative overflow-hidden">
        <h1 className="  scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Applications
        </h1>
      </div>
      <Container>
        <div className="flex-col text-center mt-8 px-2 my-16">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Whether you're constructing a skyscraper, creating bespoke
            furniture, or embarking on a DIY adventure, plywood is your reliable
            companion, combining tradition with innovation to shape the world
            around us. Its adaptability and strength make it an essential
            building block in countless projects.
          </p>
        </div>
        <div className="flex-col flex gap-8 md:grid md:grid-cols-2 md:gap-4 mb-10 py-10">
          {applicationUses.map((application, applicationIndex) => (
            <div key={applicationIndex} className="flex flex-col justify-between gap-2 px-4">
              <h1 className="mt-10 text-green-700 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {application.uses}
              </h1>
              <Image
              className="max-h-[617px]"
                priority
                src={application.url}
                alt={application.description}
              />
              <div className="leading-7 [&:not(:first-child)]:mt-6">
                {application.description}
              </div>
              <Button asChild={true} className="bg-green-700 my-9">
                <Link href={application.href} >Learn more</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
