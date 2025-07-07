import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import carouselText1 from "@/assets/carouseltxt1.txt?raw";
import carouselText2 from "@/assets/carouseltxt2.txt?raw";
import carouselText3 from "@/assets/carouseltxt3.txt?raw";

export default function CarouselWithContent() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    setTexts([carouselText1, carouselText2, carouselText3]);
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
  let title, details;
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
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    {(title = data.split("|")[0])}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    {(details = data.split("|")[1])}
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
