import { Separator } from "./ui/separator";


const chipDataTable = ({productDetails}) => {
  const {size,thickness,glue,material} = productDetails


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
        <span className="font-semibold ">Glue</span>
        <span className="text-left col-span-2">{glue}</span>
      </div>
      <Separator />

      <div className="grid grid-cols-3 items-center">
        <span className="font-semibold">Material</span>
        <span className="text-left col-span-2">
          {material}
        </span>
      </div>
      <Separator />
    </div>
  );
};

export default chipDataTable;
