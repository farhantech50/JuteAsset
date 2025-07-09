import React from "react";

export default function About() {
  return (
    <div className="w-full p-2 sm:p-14 min-h-screen bg-custom-accent dark:bg-custom-background-dark flex items-center">
      <div className="w-full h-[87vh] p-10 flex-grow rounded-lg bg-[#f2f2f2] dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full ">
          <div className="flex flex-col justify-center items-start"></div>
          <div className="flex flex-col justify-center items-start"></div>
        </div>
      </div>
    </div>
  );
}
