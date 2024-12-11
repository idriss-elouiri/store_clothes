"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Collection() {
  const [showSearchBar, setShowSearchBar] = useState(true);

  // Toggle function to show or hide the search bar
  const toggleSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  const collections = [
    {
      id: 1,
      title: "جاكيت أنيق",
      price: "120$",
      image: "/images/p_img2_1.png",
    },
    {
      id: 2,
      title: "ساعة كلاسيكية",
      price: "250$",
      image: "/images/p_img2_1.png",
    },
    {
      id: 3,
      title: "أحذية أنيقة",
      price: "180$",
      image: "/images/p_img2_1.png",
    },
    {
      id: 4,
      title: "حقيبة عصرية",
      price: "90$",
      image: "/images/p_img2_1.png",
    },
  ];
  return (
    <div className="min-h-screen py-10">
      {/* Header with Search Bar and Search Icon */}
      <div className="max-w-screen-lg mx-auto px-4 mb-10 border-t border-b bg-gray-100">
        <div className="flex items-center justify-center space-x-4">
          {/* Toggle Button for Search Bar */}

          {/* Conditionally render the Search Bar */}
          {showSearchBar && (
            <div className="w-1/2 md:w-1/3 relative">
              <input
                type="text"
                placeholder="ابحث في المجموعات..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full text-lg "
              />
              {/* Search Icon inside the Input */}
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          )}
          <button
            onClick={toggleSearchBar}
            className="px-4 py-2 rounded-md text-lg font-semibold text-slate-800"
          >
            {showSearchBar ? (
              <Image
                src="/images/cross_icon.png"
                alt="Icon to close search"
                width={20}
                height={20}
                className="rounded-lg"
              />
            ) : (
              "إظهار شريط البحث"
            )}
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Filters Section */}
        <div className="p-6 rounded-lg w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-4">الفلاتر</h2>

          {/* Categories Filter */}
          <div className="mb-6 p-3 border">
            <h3 className="font-semibold text-md mb-2">الفئات</h3>
            <ul>
              <li className="py-1">
                <input type="checkbox" id="men" />
                <label htmlFor="men" className="ml-2 text-slate-600">
                  رجال
                </label>
              </li>
              <li className="py-1">
                <input type="checkbox" id="women" />
                <label htmlFor="women" className="ml-2 text-slate-600">
                  نساء
                </label>
              </li>
              <li className="py-1">
                <input type="checkbox" id="kids" />
                <label htmlFor="kids" className="ml-2 text-slate-600">
                  أطفال
                </label>
              </li>
            </ul>
          </div>

          {/* Type Filter */}
          <div className="mb-6 p-3 border">
            <h3 className="font-semibold text-md mb-2">الأنواع</h3>
            <ul>
              <li className="py-1">
                <input type="checkbox" id="topwear" />
                <label htmlFor="topwear" className="ml-2 text-slate-600">
                  ملابس علوية
                </label>
              </li>
              <li className="py-1">
                <input type="checkbox" id="bottomwear" />
                <label htmlFor="bottomwear" className="ml-2 text-slate-600">
                  ملابس سفلية
                </label>
              </li>
              <li className="py-1">
                <input type="checkbox" id="winterwear" />
                <label htmlFor="winterwear" className="ml-2 text-slate-600">
                  ملابس شتوية
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* Collection Section */}
        <div className="w-full lg:w-3/4">
          {/* Sort and Filter Bar */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">جميع المجموعات</h2>
            <div className="flex items-center gap-4">
              <span className="text-lg">الترتيب حسب:</span>
              <select className="py-2 px-4 border border-gray-300 rounded-lg text-lg">
                <option value="relevant">الأكثر صلة</option>
                <option value="price-asc">السعر: من الأقل للأعلى</option>
                <option value="price-desc">السعر: من الأعلى للأقل</option>
              </select>
            </div>
          </div>

          {/* Collection Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-48 transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xl text-slate-800 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
