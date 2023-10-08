import filmPly from "/public/plywoodImages/filmply-desktop-min.jpg";
import fancy from "/public/plywoodImages/Fancy-min.jpg";
import engineeredFancy from "/public/plywoodImages/engineer-fancy-min.jpg";
import commercialPly from "/public/plywoodImages/commercial-min.jpg";
import glossPly from "/public/plywoodImages/gloss-min.jpeg";





const plywoodData = [
  {
    productName: "MDF",
    productType: "fiber-board",
    productImage: filmPly,
    url:'/products/fiberboard/mdf',
    application:"Engineered from finely processed wood fibers, MDF ensures uniform density and a pristine surface ready for finishing. Embrace its adaptability for everything from bespoke furniture to intricate woodwork. MDF: the trusted choice for artisans who demand excellence."
  },
  {
    productName: "HDF",
    productType: "fiber-board",
    productImage: fancy,
    url:'/products/fiberboard/hdf',
    application:"Crafted from densely compressed wood fibers, HDF offers remarkable strength and smoothness, making it an ideal choice for furniture, flooring, doors, and more. Explore the world of possibilities with HDF—a reliable, durable, and versatile building material at your fingertips."
  },
  {
    productName: "Hardboard",
    productType: "fiber-board",
    productImage: engineeredFancy,
    url:'/products/fiberboard/hardboard',
    application:"Whether crafting furniture, molding, or decorative panels, hardboard stands as a reliable choice for its durability and ease of customization. Elevate your craftsmanship with the dependable strength of hardboard."
  },
  {
    productName: "UV MDF",
    productType: "fiber-board",
    productImage: commercialPly,
    url:'/products/fiberboard/uvmdf',
    application:"Similar to UV plywood boards , the same UV coating is applied to the surface of fiber boards. The UV coating used in UV plywood production provides several advantages, including a smooth and glossy finish, excellent durability, resistance to scratches and fading, and the ability to create visually appealing and modern designs."
  },
  {
    productName: "Embossed Hardboard",
    productType: "fiber-board",
    productImage: glossPly,
    url:'/products/fiberboard/embossedhardboard',
    application:"Embossing the surface of the fiber board carefully with raised patterns and textures, it introduces depth and character to interior paneling, furniture, and decorative accents. "
  },

];
export default plywoodData;