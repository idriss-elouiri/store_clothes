"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BestSellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/products/get?sort=desc&limit=4`
        );
        if (!response.ok) {
          throw new Error("فشل في جلب المنتجات");
        }
        const data = await response.json();
        setBestsellers(data.products.filter((p) => p.bestseller));
      } catch (error) {
        setError("حدث خطأ أثناء جلب المنتجات");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  if (loading) {
    return <p>جاري التحميل...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title and Description */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 w-full mb-4">
            <h2 className="text-4xl font-bold text-slate-900">
              <span className="text-slate-600">الأكثر</span> مبيعًا
            </h2>
            <div className="w-16 h-1 bg-slate-900"></div>
          </div>
          <p className="text-slate-600 text-lg">
            منتجات الملابس الحديثة هي أحدث ما وصل إلى عالم الموضة، حيث تتميز
            بتصاميم مبتكرة وأقمشة عالية الجودة.
          </p>
        </div>

        {/* Collection Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((item) => (
            <Link
              href={`/productDetails/${item._id}`}
              key={item._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={
                    item.imagesByColor[Object.keys(item.imagesByColor)[0]]
                      .images[0]
                  }
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-58 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl text-slate-800 mb-2">{item.title}</h3>
              <p className="text-xl text-slate-800 font-bold">
                {item.price}د.م
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
