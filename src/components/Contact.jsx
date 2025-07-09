import { FiPhone } from "react-icons/fi";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div
      className="w-full bg-custom-accent dark:bg-custom-background-dark"
      style={{ height: "calc(100vh / 2)" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Heading */}
        <p className="text-xl sm:text-2xl xl:text-4xl font-bold text-white my-3">
          Get in touch with us now!
        </p>

        {/* Pill-shaped div */}
        <div className="w-[95%] h-[80%] sm:h-[90%] rounded-full bg-white/10 my-3 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white w-full h-full">
            {/* Phone */}
            <div className="flex items-center justify-end sm:justify-center w-full h-full text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20  2xl:w-36 2xl:h-28 bg-white/80 rounded-full flex items-center justify-center text-xl sm:text-4xl text-custom-accent">
                <FiPhone />
              </div>

              {/* Text Content */}
              <div className="text-xs sm:text-sm text-white mt-2 leading-tight">
                <div className="font-bold">Call Us</div>
                <div>+8801761158100</div>
                <div>+8801765297395</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-end sm:justify-center w-full h-full text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20  2xl:w-36 2xl:h-28 bg-white/80 rounded-full flex items-center justify-center text-xl sm:text-4xl text-custom-accent">
                <MdEmail />
              </div>

              {/* Text Content */}
              <div className="text-xs sm:text-sm text-white mt-2 leading-tight">
                <div className="font-bold">Email Us</div>
                <div>juteasset@gmail.com</div>
                <div>asset700@gmail.com</div>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center justify-start sm:justify-center w-full h-full text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20  2xl:w-36 2xl:h-28 bg-white/80 rounded-full flex items-center justify-center text-xl sm:text-4xl text-custom-accent">
                <MdAccessTime />
              </div>

              {/* Text Content */}
              <div className="text-xs sm:text-sm text-white mt-2 leading-tight">
                <div className="font-bold">Working Hours</div>
                <div>Monday-Friday</div>
                <div>9 AM to 8 PM</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-start sm:justify-center w-full h-full text-center flex-col">
              <div className="w-20 h-8 sm:w-28 sm:h-20  2xl:w-36 2xl:h-28 bg-white/80 rounded-full flex items-center justify-center text-xl sm:text-4xl text-custom-accent">
                <IoLocationSharp />
              </div>

              {/* Text Content */}
              <div className="text-xs sm:text-sm text-white mt-2 leading-tight">
                <div className="font-bold">Find Us</div>
                <div>271/6 Niribili Housing, West Dhanmondi,</div>
                <div>Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
