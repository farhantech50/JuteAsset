import { FiPhone } from "react-icons/fi";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="w-full py-4 bg-custom-accent dark:bg-custom-background-dark">
      <div className="w-full h-full flex items-center justify-center">
        {/* Pill-shaped div */}
        <div className="w-[95%] h-[80%] sm:h-[90%] rounded-lg sm:rounded-full bg-[#f2f2f2]/85 dark:bg-gray-900  flex flex-col py-6">
          {/* Heading INSIDE pill */}
          <p className="text-3xl font-semibold text-center text-custom-text dark:text-custom-background mb-6 pt-2">
            Contact us
          </p>

          {/* Content */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full h-full">
            {/* Phone */}
            <div className="flex items-center justify-end sm:justify-center text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20 2xl:w-36 2xl:h-28 bg-custom-accent dark:bg-[#f2f2f2]/85 rounded-full flex items-center justify-center text-xl sm:text-4xl">
                <FiPhone className="text-[#f2f2f2]/85 dark:text-custom-accent" />
              </div>
              <div className="text-xs sm:text-sm text-black dark:text-white mt-2">
                <div className="font-bold">Call Us</div>
                <div>+8801761158100</div>
                <div>+8801765297395</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-end sm:justify-center text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20 2xl:w-36 2xl:h-28 bg-custom-accent dark:bg-[#f2f2f2]/85 rounded-full flex items-center justify-center text-xl sm:text-4xl">
                <MdEmail className="text-[#f2f2f2]/85 dark:text-custom-accent" />
              </div>
              <div className="text-xs sm:text-sm text-black dark:text-white mt-2">
                <div className="font-bold">Email Us</div>
                <div>juteasset@gmail.com</div>
                <div>asset700@gmail.com</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-start sm:justify-center text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20 2xl:w-36 2xl:h-28 bg-custom-accent dark:bg-[#f2f2f2]/85 rounded-full flex items-center justify-center text-xl sm:text-4xl">
                <IoLocationSharp className="text-[#f2f2f2]/85 dark:text-custom-accent" />
              </div>
              <div className="text-xs sm:text-sm text-black dark:text-white mt-2">
                <div className="font-bold">Find Us</div>
                <div>271/6 Niribili Housing, West Dhanmondi,</div>
                <div>Dhaka, Bangladesh</div>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center justify-start sm:justify-center text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20 2xl:w-36 2xl:h-28 bg-custom-accent dark:bg-[#f2f2f2]/85 rounded-full flex items-center justify-center text-xl sm:text-4xl">
                <MdAccessTime className="text-[#f2f2f2]/85 dark:text-custom-accent" />
              </div>
              <div className="text-xs sm:text-sm text-black dark:text-white mt-2">
                <div className="font-bold">Working Hours</div>
                <div>Monday–Friday</div>
                <div>9 AM to 8 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
