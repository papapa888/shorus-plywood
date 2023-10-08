export { menus, typesOfProducts, applicationUses };
import blockWood from "/public/productImages/blockboard-min.jpg";
import plywood from "/public/productImages/plywood-min.jpg";
import glossboard from "/public/productImages/glossboard-min.jpg";
import lvl from "/public/productImages/lvl-min.jpg";
import mdf from "/public/productImages/mdf-min.jpg";
import osb from "/public/productImages/osb-min.jpg";
import particleboard from "/public/productImages/particleboard-min.jpg";
import melamineBoard from "/public/productImages/melamine-min.jpg";
import cabinet from "/public/applicationImg/cabinet1200-min.jpg";
import cement from "/public/applicationImg/cement1200-min.jpg";
import gym from "/public/applicationImg//gym1200.jpg";
import house from "/public/applicationImg/house1200-min.jpg";
import outdoor from "/public/applicationImg/outdoor1200-min.jpg";
import table from "/public/applicationImg/table1200-min.jpg";

const applicationUses = [
  {
    uses: "Interior Wall Paneling",
    href: "/applications/interior-wall-paneling",
    description:
      "Plywood or OSB is commonly used to decor the interior of a building. Face materials such as different hardwood, laminate, and vinyl veneers adds an additional layer of sophistication. Alternatively they can be used to prep the interior to provides a smooth and stable surface for the flooring material to be installed on, reducing the risk of unevenness and noise.",
    url: gym,
  },
  {
    uses: "Exterior Wall Paneling",
    href: "/applications/exterior-wall-paneling",
    description:
      "Plywood can be used in exterior wall paneling applications, but it's essential to choose the right type of plywood and take proper precautions to ensure durability and weather resistance.",
    url: outdoor,
  },
  {
    uses: "Furniture Construction",
    href: "/applications/furniture-construction",
    description:
      "Plywood is often used in the construction of various types of furniture, including tables, chairs, cabinets, and shelves. Its strength and durability make it suitable for creating the framework and surfaces of furniture pieces.",
    url: table,
  },
  {
    uses: "Shuttering",
    href: "/applications/shuttering",
    description:
      "Shuttering plywood, also known as formwork plywood or sheathing plywood, is a specific type of plywood designed for use in concrete formwork and construction applications. It is not intended for use as a finished surface but rather as a temporary mold or framework for pouring and shaping concrete. Here are some key features and uses of shuttering plywood",
    url: cement,
  },
  {
    uses: "Cabinetry",
    href: "/applications/cabinetry",
    description:
      "Plywood is a popular choice for kitchen and bathroom cabinets. It provides a stable and flat surface for mounting cabinet doors and shelves, and it resists warping and moisture damage when properly sealed.",
    url: cabinet,
  },
  {
    uses: "Roof Sheathing",
    href: "/applications/roof-sheathing",
    description:
      "Plywood is often used as roof sheathing or decking material. It provides a strong and stable base for roofing materials like shingles or metal roofing. Plywood's dimensional stability helps maintain the integrity of the roof structure.",
    url: house,
  },
];

const menus = [
  { id: 111, name: "PRODUCTS", href: "/products" },
  { id: 2222, name: "APPLICATIONS", href: "/applications" },
  { id: 3333, name: "ABOUT US", href: "/aboutus" },
  { id: 444, name: "DOWNLOADS", href: "/downloads" },
  
  { id: 555, name: "CONTACT", href: "/contact" },
];

const typesOfProducts = [
  {
    id: 231,
    types: "Plywood",
    href: "/products/plywood",
    // imgUrl: "public/productImages/plywood-min.jpg",
    imgUrl: plywood,
  },
  {
    id: 232,
    types: "OSB",
    href: "/products/osb",
    imgUrl: osb,
    // imgUrl: "/public/productImages/osb-min.jpg",
  },
  {
    id: 233,
    types: "Fibre Board",
    href: "/products/fiberboard",
    imgUrl: mdf,
    // imgUrl: "/public/productImages/mdf-min.jpg",
  },
  {
    id: 234,
    types: "Chipboard",
    href: "/products/chipboard",
    imgUrl: particleboard,
    // imgUrl: "/public/productImages/particleboard-min.jpg",
  },
  {
    id: 235,
    types: "PVC Board",
    href: "/products/pvcboard",
    imgUrl: glossboard,
    // imgUrl: "/public/productImages/glossboard-min.jpg",
  },
  {
    id: 238,
    types: "Melamine Board",
    href: "/products/melamineboard",
    imgUrl: melamineBoard,
    // imgUrl: "/public/productImages/melamine-min.jpg",
  },
  {
    id: 237,
    types: "Laminated Veneer Lumber",
    href: "/products/laminatedveneerlumber",
    imgUrl: lvl,
    // imgUrl: "/public/productImages/lvl-min.jpg",
  },
  {
    id: 239,
    types: "Block Board",
    href: "/products/blockboard",
    // imgUrl: "/public/productImages/blockboard-min",
    imgUrl: blockWood,
  },
];
