import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import DataTable from "./DataTable";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ product }) => {
  const {
    urlLg,
    urlMoble,
    title,
    cardDescription,
    cardContent,
    productDetails,
    url,
  } = product;
  return (
    <Card className=" mb-16 w-full max-h-[1500px] flex-col">
      <div className=" object-fill  ">
        <div className="block sm:hidden mx-auto w-[95%]">
          <Image
            className="min-h-full w-full rounded-lg "
            src={urlMoble}
            alt={cardDescription}
          />
        </div>
        <div className="sm:block hidden mx-auto w-[95%]">
          <Image
            className="min-h-full w-full rounded-lg "
            src={urlLg}
            alt={cardDescription}
          />
        </div>
      </div>
      <div>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent className="sm:min-h-[800px]">
          <p className="mb-8 md:min-h-full">{cardContent}</p>
          <DataTable productDetails={productDetails} />
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full  bg-green-700">
            <Link href={url}>
              <CheckIcon className="mr-2 h-4 w-4" />
              <h1>Click to learn more</h1>
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default HeroCard;
