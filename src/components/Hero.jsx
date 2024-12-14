"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [latestArrivals, setLatestArrivals] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/products/get?sort=desc&limit=3`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setLatestArrivals(data.products.filter((p) => !p.bestseller));
        setBestsellers(data.products.filter((p) => p.bestseller));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  // Automatic slider logic
  useEffect(() => {
    if (bestsellers.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bestsellers.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [bestsellers]);

  return (
    <section className="py-10" dir="rtl">
      {" "}
      {/* Add dir="rtl" for right-to-left layout */}
      <div className="container border border-slate-400 mx-auto bg-gray-200 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="mb-6 md:mb-0 md:w-1/2 text-center md:text-right">
          <div className="flex items-center justify-start">
            <div className="bg-slate-800 w-16 h-1"></div>
            <h1 className="text-lg font-semibold text-slate-800 mr-2">
              الأكثر مبيعاً لدينا
            </h1>
          </div>
          <p className="text-[50px] text-slate-800 my-4">
            أحدث المنتجات المميزة
          </p>
          <div className="flex items-center justify-start">
            <button className="text-slate-800 rounded-md text-lg font-semibold">
              تسوق الآن
            </button>
            <div className="bg-slate-800 w-16 h-1 ml-2"></div>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="md:w-1/2 flex justify-center">
          {bestsellers.length > 0 && (
            <Image
              src={
                bestsellers[currentSlide]?.imagesByColor?.["ازرق"]
                  ?.images?.[0] ||
                Object.values(bestsellers[currentSlide]?.imagesByColor || {})[0]
                  ?.images?.[0] || // Fallback to any available color
                "/images/default.jpg"
              }
              alt={bestsellers[currentSlide]?.title || "Bestseller"}
              width={500}
              height={500}
              className="rounded-lg shadow-lg transition-opacity duration-500"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
