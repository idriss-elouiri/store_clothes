"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [latestArrivals, setLatestArrivals] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/products/get?sort=desc&limit=1`
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
  }, []);

  return (
    <section className="py-10">
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
          {bestsellers.length > 0 && (
            <Image
              src={
                bestsellers[0]?.imagesByColor?.["ازرق"]?.images?.[0] ||
                "/images/default.jpg"
              }
              alt={bestsellers[0]?.title || "Bestseller"}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
