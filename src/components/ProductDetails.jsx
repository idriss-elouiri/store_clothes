"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/api/products/${id}`, {
          headers: {
            Authorization: `Bearer YOUR_TOKEN_HERE`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
        const firstColorImages = Object.values(data.imagesByColor || {})[0]
          ?.images;
        setMainImage(firstColorImages ? firstColorImages[0] : null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const cartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      quantity,
      image: mainImage,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2">
          {/* Main Image */}
          <div className="mb-6">
            <img
              src={mainImage}
              alt={product?.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Related Images */}
          {Object.entries(product?.imagesByColor || {}).map(([color, data]) => (
            <div key={color} className="mb-4">
              <h4 className="text-gray-600 mb-2">{color}</h4>
              <div className="flex gap-2">
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${color} - ${index}`}
                    className="w-20 h-20 rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product?.title || "Product Title"}
          </h1>
          <p className="text-gray-500 text-sm mb-2">
            ({product?.reviews?.length || 0} Reviews)
          </p>
          <p className="text-2xl font-bold text-slate-800 mb-6">
            {product?.price || 0}د.م
          </p>
          <p className="text-gray-700 text-lg mb-6">
            {product?.content || "No description available."}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Select Size
          </h3>
          <div className="flex gap-4 mb-6">
            {product?.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className="px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="py-3 px-3 text-white bg-black rounded-lg transition mb-6"
          >
            اضافة الي السلة
          </button>
          <p className="text-gray-600 text-sm">
            100% Original product.
            <br />
            Cash on delivery is available on this product.
            <br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>

      {/* Bottom Section - Tabs */}
      <div className="max-w-screen-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-6 border-b pb-4 mb-6" role="tablist">
          <button
            aria-selected={activeTab === "description"}
            className={`text-lg font-semibold pb-2 border-b-4 transition ${
              activeTab === "description"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            aria-selected={activeTab === "reviews"}
            className={`text-lg font-semibold pb-2 border-b-4 transition ${
              activeTab === "reviews"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product?.reviews?.length || 0})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="text-gray-700 text-lg">
            {product?.content || "No description available."}
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-gray-700 text-lg">
            {product?.reviews?.length
              ? product.reviews.map((review, index) => (
                  <p key={index}>{review}</p>
                ))
              : "No reviews yet."}
          </div>
        )}
      </div>
    </div>
  );
}
