import {
  FaShieldAlt,
  FaClock,
  FaTags,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
export default function Why() {
  return (
    <div className="w-full pt-8 pb-4 px-2 bg-custom-accent dark:bg-custom-background-dark flex items-center">
      <div className="w-full h-full p-10 flex-grow rounded-lg md:rounded-full  bg-[#f2f2f2]/85 dark:bg-gray-900 ">
        <p className="text-3xl font-semibold text-center text-custom-text dark:text-custom-text-dark mb-6">
          Why Us?
        </p>
        <div className="grid grid-cols-2 p-3 mb-5 gap-3 w-full md:grid-cols-6 h-auto items-center text-custom-accent dark:text-custom-text-dark">
          <div className="h-full flex flex-col items-center justify-center">
            <FaShieldAlt className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center text-black dark:text-custom-text-dark">
              Quality Guaranteed
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <FaTags className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center text-black dark:text-custom-text-dark">
              Competitive Pricing
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <FaClock className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center  text-black dark:text-custom-text-dark">
              Timely Shipment
            </p>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <GrCertificate className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center  text-black dark:text-custom-text-dark">
              Tested & Certified
            </p>
          </div>

          <div className="h-full flex flex-col items-center justify-center">
            <FaShippingFast className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center  text-black dark:text-custom-text-dark">
              Global Delivery
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <FaHeadset className="text-4xl sm:text-5xl mb-2" />
            <p className="text-sm sm:text-base font-semibold text-center  text-black dark:text-custom-text-dark">
              24/7 Support
            </p>
          </div>
        </div>
        <p className="text-sm sm:text-base font-semibold text-justify sm:text-center  text-gray-800  dark:text-custom-text-dark ">
          Selecting our company ensures a commitment to excellence across key
          facets. Our rigorous Quality Assurance guarantees consistently high
          standards, complemented by Competitive Pricing for value without
          compromise. On time delivery exemplifies effective logistics, while
          our Tested & Certified products demonstrate compliance, trust, and
          risk mitigation. With 24/7 Customer Support, we offer round-the-clock
          assistance for prompt issue resolution. Choosing our product is an
          excellent way to experience a commitment to reliability, excellence,
          and a customer-centric approach.
        </p>
      </div>
    </div>
  );
}
