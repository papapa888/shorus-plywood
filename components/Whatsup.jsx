import whatsUpIcon from "/public/WhatsAppButtonGreenSmall.svg";
import Image from "next/image";

const Whatsup = () => {
  return (
    <div className="w-20 h-20 fixed top-[80%] left-[80%] z-50 md:left-[90%]  ">
      <div className="relative w-full h-full">
        <a
          className=""
          aria-label="Chat on WhatsApp"
          href="https://wa.me/447824565068"
        >
          <Image className="w-16 h-16" src={whatsUpIcon} alt="Whatsup Icon logo" />
        </a>
      </div>
    </div>
  );
};

export default Whatsup;
