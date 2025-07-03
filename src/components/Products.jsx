import React from "react";
import ProductCard from "@/components/ProductCard";
import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Products() {
  return (
    <div className="w-full p-14 min-h-screen bg-custom-accent dark:bg-custom-background-dark flex">
      <div className="w-full p-4 flex-grow rounded-lg bg-white">
        <p className="text-3xl font-semibold text-center text-custom-text mb-6 py-10">
          Our Products
        </p>

        <Carousel
          autoplay={true}
          autoplayDelay={4000}
          loop={true}
          className="h-[450px]"
          prevArrow={({ loop, handlePrev, firstIndex }) => (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          nextArrow={({ loop, handleNext, lastIndex }) => (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
          navigation={""}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-center items-center gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
