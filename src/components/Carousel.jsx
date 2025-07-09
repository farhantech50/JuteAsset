import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import carouselText from "@/assets/carouseltxt.txt?raw";

export default function CarouselWithContent() {
  const [texts, setTexts] = useState([]);
  console.log(carouselText);
  useEffect(() => {
    setTexts(carouselText?.split("|"));
  }, []);

  const handleExploreClick = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative w-full h-screen">
      <Carousel autoplay={true} autoplayDelay={4000} loop={true}>
        {texts.map((data, index) => {
          return (
            <div className="relative h-full w-full">
              <img
                src={`/carousel/carousel${index + 1}.jpg`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 text-xl sm:text-2xl"
                  >
                    {data}
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button
                      className="bg-custom-accent hover:bg-custom-accent-hover transition-all duration-300 w-auto"
                      onClick={handleExploreClick}
                    >
                      Explore
                    </Button>
                    <Button
                      className="w-auto"
                      color="white"
                      variant="text"
                      onClick={handleContactClick}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
