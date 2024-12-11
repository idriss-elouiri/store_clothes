import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* About Section */}
        <div className="mb-12 md:flex md:justify-between">
          <div className="md:w-1/3">
            <Image
              src="/images/logo.png"
              alt="Upload Images"
              width={100}
              height={100}
              className="cursor-pointer mb-4"
            />
            <p className="text-md text-slate-800 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:w-1/4">
            <h3 className="text-xl text-black font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-800 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-800 hover:text-black">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-800 hover:text-black">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-800 hover:text-black" >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:w-1/4">
            <h3 className="text-xl text-black font-semibold mb-4">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+10000000000" className="text-slate-800 hover:text-black">
                  +1-000-000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:greatstackdev@gmail.com"
                  className="text-slate-800 hover:text-black"
                >
                  greatstackdev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-slate-800 hover:text-black"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-balck text-md">
            Copyright 2024@ idriss.dev - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
