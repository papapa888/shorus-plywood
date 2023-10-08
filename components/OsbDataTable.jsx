import { Separator } from "./ui/separator";

const osbDataTable = ({productDetails}) => {
  const {size,thickness,grade,standard,glue,species,density} = productDetails


  return (
    <div className="flex flex-col gap-5 leading-normal text h-full ">
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold ">Size</span>
        <span className="text-left col-span-2">{size}</span>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold ">Thickness</span>
        <span className="text-left col-span-2">{thickness} </span>
      </div>

      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold ">Grade</span>
        <span className="text-left col-span-2">{grade}</span>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold ">Standard</span>
        <span className="text-left col-span-2">{standard}</span>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold ">Glue</span>
        <span className="text-left col-span-2">{glue}</span>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold">Density</span>
        <span className="text-left col-span-2">
          {density}
        </span>
      </div>
      <Separator />
      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold">Core Species</span>
        <span className="text-left col-span-2">
          {species}
        </span>
      </div>
      <Separator />
    </div>
  );
};

export default osbDataTable;
