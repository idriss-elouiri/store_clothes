import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-10 b">
      <div className="container border border-slate-400 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
          <div className="flex items-center">
            <div className="bg-slate-800 w-16 h-1"></div>
            <h1 className="text-lg font-semibold text-slate-800">
              OUR BESTSELLERS
            </h1>
          </div>
          <p className="text-[50px] text-slate-800 my-4">Latest Arrivals</p>
          <div className="flex items-center">
            <button className="text-slate-800 rounded-md text-lg font-semibold">
              SHOP NOW
            </button>
            <div className="bg-slate-800 w-16 h-1"></div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/p_img2_1.png"
            alt="Hero Section Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
