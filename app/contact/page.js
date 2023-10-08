import React from "react";
import ContactForm from "/components/ContactForm";
import Container from "@/components/Container";

const page = () => {
  return (
    <div>
      <div className=" h-80  bg-[url('/images/contact.jpg')] bg-top bg-cover md:bg-top flex items-center justify-center relative overflow-hidden mb-8">
        <h1 className=" scroll-m-20 text-orange-400 [text-shadow:_3px_2px_2px_black] text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          Contact us
        </h1>
      </div>
      <Container>
        <div className="flex flex-col gap-16 my-20">
          <ContactForm />
          <div className="">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors ml-8 text-center first:mt-0">
              Offices
            </h2>

            <div className="flex flex-col gap-10 items-center md:grid md:grid-cols-2 md:justify-items-center ">
              <div>
                <p className="font-semibold text-orange-400 dark:text-white ">
                  Dubai
                </p>

                <div className="flex flex-col gap-3 items-start text-sm mt-5 space-y-2">
                  <div className="flex  gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Telephone :</p>
                      <p className="min-w-[76.8px]">Whatsup :</p>
                    </div>
                    <div>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +971-54-3318388
                      </p>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +971-50-3958025
                      </p>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +971-58-913-4032
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Email :</p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        info@shorus.de
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                      Deira, Dubai-U.A.E
                    </p>

                    <p>U.A.E</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-orange-400 dark:text-white">
                  Germany
                </p>

                <div className="flex flex-col gap-3 items-start text-sm mt-5 space-y-2">
                  <div className="flex  gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Telephone :</p>
                    </div>
                    <div>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +49-02154 605 7682
                      </p>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +49-02154 605 7683
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Email :</p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        info@shorus.de
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                      Rohrzieherstr.8
                    </p>
                    <p>47877 </p>
                    <p>Willich </p>

                    <p>Germany</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-orange-400 dark:text-white">
                  China(Shandong)
                </p>

                <div className="flex flex-col gap-3 items-start text-sm mt-5 space-y-2">
                  <div className="flex  gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Wechat</p>
                      <p className="min-w-[76.8px]">Whatsup</p>
                    </div>
                    <div>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +86 177 1851 1345
                      </p>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +86 182 5155 1345
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Email :</p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        info@shorus.de
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                      Yigaoshanghaijie NO.1
                    </p>
                    <p>Building Beicheng new area</p>
                    <p>Lanshan district </p>
                    <p>Linyi city </p>

                    <p>Shandong </p>
                    <p>China</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-orange-400 dark:text-white">
                  China (Jiangsu)
                </p>

                <div className="flex flex-col gap-3 items-start text-sm mt-5 space-y-2">
                  <div className="flex  gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Telephone :</p>
                    </div>
                    <div>
                      <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        400-112-6882
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Email :</p>
                    </div>
                    <div>
                      <p className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        info@shorus.de
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div>
                      <p className="min-w-[76.8px]">Mobile :</p>
                    </div>
                    <div>
                      <h1 className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                        +86-510-8179-8500
                      </h1>
                    </div>
                  </div>

                  <div>
                    <p className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                      Kaixuan Road
                    </p>
                    <p>Economic Development Zone </p>
                    <p>Yixing City</p>
                    <p>Jiangsu PR China</p>
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
