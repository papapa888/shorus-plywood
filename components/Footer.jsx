import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl text-white">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-whit0 bg-white border rounded-md text-gray-300  focus:border-blue-900  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-green-700 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-orange-400 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"
                href={"/products"}
              >
                Products
              </Link>
              <Link
                className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"
                href={"/aboutus"}
              >
                About us
              </Link>
              <Link
                className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500"
                href={"/contactus"}
              >
                Contact us
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-orange-400 dark:text-white">
              Address
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
                  <p className="min-w-[76.8px]">Whatsup / Mobile :</p>
                </div>
                <div>
   
                    <h1 className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">+971-54-3318388</h1>
                    <h1 className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">+971-50-3958025</h1>
                    <h1 className="transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">+971-58-913-4032</h1>
                 
                </div>
              </div>

              <div>
                <p className=" transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Yigaoshanghaijie NO.1 Building Beicheng new area
                </p>
                <p>Lanshan District </p>
                <p>Linyi City</p>
                <p>Shandong PR China</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
          </div>
        </div>
        <p className="font-sans text-sm p-8 text-start md:text-center md:text-lg md:p-4">
          Copyright © Jiangsu Hongren Energy Technology Co.,Ltd.
          沪ICP备16031279号
        </p>
      </div>
    </footer>
  );
};

export default Footer;
