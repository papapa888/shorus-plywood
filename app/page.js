import HeroProduct from "@/components/HeroProduct";
import Swiper from "@/components/Swiper";
import QualityControl from "@/components/QualityControl";


export default function Home() {
  return (
    <section>
      <Swiper />
      <div>
        <div className="my-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mt-7 text-center">
            Hot Products
          </h1>
        </div>
      </div>
      <div className="className=' mx-auto  max-w-7xl lg:gap-8 mb-32">
        <HeroProduct />
      </div>
      <QualityControl />
    </section>
  );
}
