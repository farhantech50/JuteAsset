import { lazy, Suspense } from "react";

// Lazy imports:
import Carousel from "../components/Carousel";
const Why = lazy(() => import("../components/Why"));
const Products = lazy(() => import("../components/Products"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));

import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCarousel } from "@/contexts/CarouselInViewContext";

export default function HomePage() {
  const location = useLocation();
  const carouselRef = useRef(null);
  const { setCarouselInView } = useCarousel();

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          setCarouselInView(true);
        } else {
          setCarouselInView(false);
        }
      },
      { threshold: [0.1] } // 100% visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const getSectionId = (path) => {
      switch (path) {
        case "/":
          return "home";
        case "/products":
          return "products";
        case "/why":
          return "why";
        case "/contact":
          return "contact";
        case "/about":
          return "about";
        default:
          return null;
      }
    };

    const sectionId = getSectionId(location.pathname);
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="flex flex-col w-full ">
      <div id="home" ref={carouselRef}>
        <Carousel />
      </div>
      <Suspense fallback={null}>
        <div className="scroll-mt-72" id="why">
          <Why />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}
