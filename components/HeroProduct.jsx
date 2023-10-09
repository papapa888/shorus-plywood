
import desktopFilmPly from "../public/images/filmply-desktop.jpg";
import mobileFilmPly from "../public/images/filmply-mobile.jpg"
import desktopBirch from "../public/images/desktop-birch-min.jpg"
import mobileBirch from "../public/images/mobile-birch-min.jpg"
import HeroCard from "./HeroCard";


const heroProducts = [
  {
    urlLg: desktopFilmPly,
    urlMoble: mobileFilmPly,
    title: "Film Faced Plywood",
    cardDescription: "Designed for formwork and shuttering",
    url:"/products/plywood/filmfacedplywood",
    cardContent:
      "Primarily known for its use in concrete formwork.Its smooth and moisture-resistant surface, coupled with high structural strength, makes it an ideal choice for creating molds or frames for pouring and shaping concrete",
      productDetails:{
        size:"1220mm x 2440mm / customizable",
        thickness:"6mm,9mm,12mm,18mm,21mm ",
        grade:"BB/BB,BB/CC, A/B, or as your requests",
        standard:"BSI",
        glue:"WBP, MR, E-1. E-2, E-0",
        faceBack:"Phenolic film(black or brown)/imported dynea brown  film/anti-slip film (black or brown), Green PP etc.",
        species:"Poplar, Tropical Hardwood, Eucalyptus, Okoume, Birch, Combi",
      },
    
  },

  {
    urlLg: desktopBirch,
    urlMoble: mobileBirch,
    title: "Commercial Plywood",
    cardDescription: "Versatile and popular choice in the world of woodworking",
    url:"/products/plywood/commercialplywood",
    cardContent:
      "Birch plywood's adaptability, strength, and attractive appearance make it an excellent choice for a wide array of applications in woodworking, construction, and design. Its versatility and reliability have made it a staple material for both professionals and hobbyists alike.",
      productDetails:{
        size:"1220X2440mm/1250x2500mm, jumbo size,4'x9',4'x8',4'x12' customizable",
        thickness:"2.0-30mm(±05.mm)",
        grade:"BB/CC,B2,B4,D/E,E/F, Lamination grade is available",
        standard:"BSI, IHPA, HPVA, JPIC",
        glue:"MR, E-1 ,E-2 ,E-0 ,WBP , ARB P2, JAS 4 STAR",
        faceBack:"Poplar, Birch, Okoume, Bintangor, Pencil Cedar, Pine, etc.",
        species:"Poplar, Tropical Hardwood, Birch, Radiate Pine, Combi",
      },
     
  },

];


const HeroProduct = () => {
  return (
    <div className=" w-full h-full  ">
      <div className="md:flex h-full  ">
          {
            heroProducts.map((product, productIndex )=> <HeroCard key={productIndex}  product={product} />)
          }
          {/* <Card className=' mb-16 w-full h-full '>
            <div className=" object-fill  ">
              <Image className="min-h-full w-full rounded-md " src={heroProducts[0].url} alt="black-film-plywood" />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Phenolic Film Faced Plywood
                </CardTitle>
                <CardDescription>
                  Designed for formwork and shuttering{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-8">
                  Primarily known for its use in concrete formwork. Its smooth
                  and moisture-resistant surface, coupled with high structural
                  strength, makes it an ideal choice for creating molds or
                  frames for pouring and shaping concrete.
                </p>
                <DataTable />
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-700">
                  <CheckIcon className="mr-2 h-4 w-4" /> Click to learn more
                </Button>
              </CardFooter>
            </div>
          </Card> */}
       
      </div>
    </div>
  );
};

export default HeroProduct;
