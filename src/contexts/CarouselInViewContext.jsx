import { createContext, useContext, useState } from "react";

// Create context
const CarouselContext = createContext();

// Create a provider
export function CarouselProvider({ children }) {
  const [carouselInView, setCarouselInView] = useState(false);

  return (
    <CarouselContext.Provider value={{ carouselInView, setCarouselInView }}>
      {children}
    </CarouselContext.Provider>
  );
}

// Create a custom hook for easy use
export function useCarousel() {
  return useContext(CarouselContext);
}
