import React from "react";
import Container from "@/components/Container";
import certs from "/public/images/certs1-min.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div>
      <div className=" h-80  bg-green-700 bg-top bg-cover md:bg-top flex items-center justify-center relative overflow-hidden mb-8">
        <h1 className=" scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Downloads
        </h1>
      </div>
      <Container>
        <div className="flex flex-col gap-10">
          <div >
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-8">
              Product Catalogue(PDF)
            </h2>
            <Button variant="link">Click here to download</Button>
          </div>
          <div>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Certificates
            </h2>
            <div className="flex flex-col items-center">
              <Image src={certs} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
