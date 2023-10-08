import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import DataTable from "./DataTable";
import Link from "next/link";
Link;

const productDetails = ({ product }) => {
  const { title, cardDescription, cardContent, productDetails } = product;
  return (
    <Card className=" md:pt-12 mb-16  flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className="sm:min-h-[800px]">
        <p className="mb-8 md:min-h-full">{cardContent}</p>
        <DataTable productDetails={productDetails} />
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-green-700">
          <Link href="https://wa.me/8618251551345">
            <Phone className="mr-2 h-4 w-4" /> Contact us
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default productDetails;
