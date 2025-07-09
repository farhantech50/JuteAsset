import producttxt1 from "@/assets/producttxt1.txt?raw";
import producttxt2 from "@/assets/producttxt2.txt?raw";
import producttxt3 from "@/assets/producttxt3.txt?raw";
import producttxt4 from "@/assets/producttxt4.txt?raw";
import producttxt5 from "@/assets/producttxt5.txt?raw";
import producttxt6 from "@/assets/producttxt6.txt?raw";
import producttxt7 from "@/assets/producttxt7.txt?raw";

import productNamesRaw from "@/assets/productNames.txt?raw";

const productNames = productNamesRaw.split(":");

export const products = [
  {
    id: 1,
    name: productNames[0],
    description: producttxt1,
    images: ["/products/1.webp", "/products/1-1.webp", "/products/1-2.webp"],
  },
  {
    id: 2,
    name: productNames[1],
    description: producttxt2,
    images: ["/products/2.webp", "/products/2-1.webp", "/products/2-2.webp"],
  },
  {
    id: 3,
    name: productNames[2],
    description: producttxt3,
    images: ["/products/3.webp", "/products/3-1.webp", "/products/3-2.webp"],
  },
  {
    id: 4,
    name: productNames[3],
    description: producttxt4,
    images: ["/products/4.webp", "/products/4-1.webp", "/products/4-2.webp"],
  },
  {
    id: 5,
    name: productNames[4],
    description: producttxt5,
    images: ["/products/5.webp", "/products/5-1.webp", "/products/5-2.webp"],
  },
  {
    id: 6,
    name: productNames[5],
    description: producttxt6,
    images: ["/products/6.webp", "/products/6-1.webp", "/products/6-2.webp"],
  },
  {
    id: 7,
    name: productNames[6],
    description: producttxt7,
    images: ["/products/7.webp", "/products/7-1.webp", "/products/7-2.webp"],
  },
];
