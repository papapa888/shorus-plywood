"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Container from "./Container";

const frameworks = [
  {
    value: "film faced plywood",
    label: "Film Faced Plywood",
    url: "/products/plywood/filmfacedplywood",
  },
  {
    value: "fancy plywood",
    label: "Fancy Plywood",
    url: "/products/plywood/fancyplywood",
  },
  {
    value: "engineered fancy plywood",
    label: "Engineered Fancy Plywood",
    url: "/products/plywood/engineeredfancyplywood",
  },
  {
    value: "commercial plywood",
    label: "Commercial Plywood",
    url: "/products/plywood/commercialplywood",
  },
  {
    value: "hpl plywood",
    label: "HPL Plywood",
    url: "/products/plywood/hplplywood",
  },
  {
    value: "uv plywood",
    label: "UV Plywood",
    url: "/products/plywood/uvplywood",
  },
  {
    value: "high gloss plywood",
    label: "High Gloss Plywood",
    url: "/products/plywood/highglossplywood",
  },
  {
    value: "osb",
    label: "OSB",
    url: "/products/osb",
  },
  {
    value: "mdf",
    label: "MDF",
    url: "/products/fiberboard/mdf",
  },
  {
    value: "hdf",
    label: "HDF",
    url: "/products/fiberboard/hdf",
  },
  {
    value: "hardboard",
    label: "Hardboard",
    url: "/products/fiberboard/hardboard",
  },
  {
    value: "uv mdf",
    label: "UV MDF",
    url: "/products/fiberboard/uvmdf",
  },
  {
    value: "embossed hardboard",
    label: "Embossed Hardboard",
    url: "/products/fiberboard/embossedhardboard",
  },
  {
    value: "chipboard",
    label: "Chipboard",
    url: "/products/chipboard",
  },
  {
    value: "pvc board",
    label: "PVC Board",
    url: "/products/pvcboard",
  },
  {
    value: "melamine board",
    label: "Melamine Board",
    url: "/products/melamineboard",
  },
  {
    value: "laminated veneer lumber",
    label: "Laminated Veneer Lumber",
    url: "/products/laminatedveneerlumber",
  },
  {
    value: "block board",
    label: "Block Board",
    url: "/products/blockboard",
  },
];

export default function SideMenu({ bannerTitle }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Container>
      <div className="bg-green-800 h-80 flex items-center justify-center">
        <h1 className="scroll-m-20 text-orange-400 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
          {bannerTitle}
        </h1>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-full py-8 justify-between text-black text-lg"
          >
            <Search />
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Browse more products..."}
            <ChevronsUpDown className="ml-2  shrink-0 " />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput className="text-lg" placeholder="Find Product..." />
            <CommandEmpty>No product found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <Link key={framework.value} href={framework.url}>
                  <CommandItem
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </Container>
  );
}
