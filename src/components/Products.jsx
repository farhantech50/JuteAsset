import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { products } from "../utils/products";
import ProductModal from "@/components/ProductModal";

export default function Products() {
  const [count, setCount] = useState(0);
  const [batch, setBatch] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (count > 0) {
      setBatch(Math.ceil(products.length / count));
    }
  }, [count]);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCount(4); // xl and above
      else if (width >= 768) setCount(3); // md
      else setCount(1); // sm and below
    };
    updateCount(); // initial check
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="w-full p-2 sm:p-14 min-h-screen bg-custom-accent dark:bg-custom-background-dark flex">
      <div className="w-full p-4 flex-grow rounded-lg bg-[#f2f2f2] dark:bg-gray-900">
        <p className="text-3xl font-semibold text-center text-custom-text dark:text-custom-background mb-6 py-10">
          Our Products
        </p>

        <Carousel
          key={`${batch}-${count}`}
          autoplay={true}
          loop={!isModalOpen}
          autoplayDelay={4000}
          className="flex flex-grow"
          prevArrow={({ loop, handlePrev, firstIndex }) => (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="absolute top-1/3 -left-4 -translate-y-1/2 text-black p-2 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px]  bg-transparent  active:bg-custom-accent/50 grid place-items-center"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          nextArrow={({ loop, handleNext, lastIndex }) => (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="absolute top-1/3 -right-4 -translate-y-1/2 text-black p-2 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px]  bg-transparent  active:bg-custom-accent/50 grid place-items-center"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
          navigation={() => {}}
        >
          {[...Array(batch)].map((_, i) => (
            <div
              className={`grid gap-4 p-4 place-items-center ${
                count === 1 ? "grid-cols-1" : ""
              } ${count === 3 ? "grid-cols-3" : ""} ${
                count === 4 ? "grid-cols-4" : ""
              }`}
              key={i}
            >
              {products
                .filter(
                  (_, index) => index >= i * count && index < (i + 1) * count
                )
                .map((product, index) => {
                  return (
                    <ProductCard
                      key={index + i * count}
                      product={product}
                      onOpenModal={() => handleOpenModal(product)}
                    />
                  );
                })}
            </div>
          ))}
        </Carousel>
        {isModalOpen && selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
