import React from "react";

export default function About() {
  return (
    <div className="w-full p-2 lg:p-14 min-h-screen h-full  bg-custom-accent dark:bg-custom-background-dark flex items-center">
      <div className="w-full h-full  p-6 lg:p-10  flex-grow rounded-lg bg-[#f2f2f2]/85 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-custom-primary dark:text-white mb-2">
                Our Story
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed text-justify tracking-wide">
                Since 1984,<strong> Jute Asset </strong>has been at the
                forefront of Bangladesh’s jute export industry, evolving into
                one of the country's most trusted names in the trade of jute
                goods. With decades of experience, we have earned a reputation
                for delivering superior quality jute products to clients across
                the globe. What began as a local initiative has grown into a
                leading exporter, deeply committed to both product excellence
                and sustainable practices. We specialize in a wide range of jute
                goods, including Hessian and Sacking Jute Bags, Hessian Cloth,
                Full Bright Hessian Bags, Light Cees Bags, and various types of
                Jute Yarn and Twine. Our operations span multiple international
                markets, and we take pride in meeting the specific demands of
                each client with precision and care.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-custom-primary dark:text-white mb-2">
                Our Mission
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed text-justify tracking-wide">
                We deliver sustainable packaging solutions through premium jute
                products, competitive pricing, and reliable service — all while
                prioritizing customer satisfaction and environmental care.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-custom-primary dark:text-white mb-2">
                Why Jute?
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed text-justify tracking-wide">
                Known globally as the "Golden Fiber", jute is a natural and
                renewable fiber obtained from the Corchorus plant, predominantly
                grown in regions like Bangladesh, India, and China. Its long,
                silky fibers are not only biodegradable and compostable, but
                also require minimal chemical use during cultivation, making it
                an ideal choice for sustainable living. Jute plays a significant
                role in promoting environmental balance through soil enrichment
                and low environmental impact farming. Despite challenges from
                synthetic alternatives, the rising global demand for
                eco-friendly products keeps jute relevant and essential. Its
                versatility allows it to be used in everything from traditional
                packaging materials to modern artistic and industrial
                applications.
              </p>
            </div>
          </div>

          {/* Right Column: Image Section */}
          <div className="flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/about-jute.webp" // Update with your actual image path
                alt="About Jute Asset"
                className=" w-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
