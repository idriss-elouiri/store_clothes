"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* الشعار */}
        <div className="text-2xl font-bold text-slate-800">
          <Image
            src="/images/logo.png"
            alt="Upload Images"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* قائمة سطح المكتب */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-slate-600 font-semibold hover:text-slate-800"
          >
            الرئيسية
          </Link>
          <Link
            href="/collection"
            className="text-slate-600 font-semibold hover:text-slate-800"
          >
            المجموعة
          </Link>
          <Link
            href="/about"
            className="text-slate-600 font-semibold hover:text-slate-800"
          >
            من نحن
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 font-semibold hover:text-slate-800"
          >
            تواصل معنا
          </Link>
          <Link href="https://admin-store-steel.vercel.app/">
           <button className="text-slate-600 font-semibold px-5 py-1 rounded-full border border-slate-300">
             لوحة الإدارة
           </button>
          </Link>
        </div>

        {/* الأيقونات وزر لوحة الإدارة */}
        <div className="flex items-center gap-6">
          <Link href={"/collection"}>
            <Image
              src="/images/search_icon.png"
              alt="Upload Images"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"/login"}>
            <Image
              src="/images/profile_icon.png"
              alt="Upload Images"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"/cart"} className="relative cursor-pointer">
            <Image
              src="/images/cart_icon.png"
              alt="Upload Images"
              width={20}
              height={20}
              className="cursor-pointer"
            />{" "}
            {getCartCount() > 0 && (
              <span className="absolute top-[-3px] right-[-5px] bg-red-600 text-white text-xs rounded-full px-1">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>

        {/* زر القائمة للهواتف */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-slate-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* القائمة للهواتف */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <a href="#home" className="text-slate-600 hover:text-slate-800">
              الرئيسية
            </a>
            <a
              href="#collection"
              className="text-slate-600 hover:text-slate-800"
            >
              المجموعة
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-800">
              من نحن
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-800">
              تواصل معنا
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
