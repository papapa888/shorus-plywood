"use client";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Navbar from "./ui/NavBar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { menus } from "@/public/menus";
import { buttonVariants } from "./ui/button";
import uuid from "react-uuid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="sm:flex sm:justify-between py-3 px-4  ">
      <div className="w-full relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div>
          <Link className="font-bold text-5xl" href={"/"}>
            <span className="text-orange-400">S</span>
            <span className="text-green-700">horus</span>
          </Link>
        </div>
        <div className=" hidden md:flex  ">
          <Navbar />
        </div>
        <div>
          <Sheet onOpenChange={handleClick}>
            <SheetTrigger>
              <HamburgerMenuIcon
                className={
                  toggleMenu
                    ? "duration-500 w-8 h-8 rotate-90"
                    : "duration-500 w-8 h-8"
                }
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shorus Timber</SheetTitle>

                <ul>
                  {menus.map((menu) => (
                    <li key={uuid()} className="text-left py-10">
                      <SheetClose asChild>
                        <Link
                          href={menu.href}
                          className={buttonVariants({ variant: "link" })}
                        >
                          {menu.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
