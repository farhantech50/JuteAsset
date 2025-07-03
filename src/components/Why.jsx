import {
  FaShieldAlt,
  FaClock,
  FaTags,
  FaHandshake,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
export default function Why() {
  return (
    <div className="w-full bg-custom-accent dark:bg-custom-background-dark shadow-md h-[300px]">
      <div className="grid grid-cols-2 p-3 mb-5 gap-3 sm:grid-cols-6 h-full items-center text-white dark:text-custom-text-dark">
        <div className="h-full flex flex-col items-center justify-center">
          <FaShieldAlt className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Quality Guaranteed
          </p>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <FaClock className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Timely Shipment
          </p>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <FaTags className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Competitive Pricing
          </p>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <FaHandshake className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Trusted Partnership
          </p>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <FaShippingFast className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Global Delivery
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-center">
          <FaHeadset className="text-4xl sm:text-5xl mb-2" />
          <p className="text-sm sm:text-base font-semibold text-center">
            24/7 Support
          </p>
        </div>
      </div>
    </div>
  );
}
