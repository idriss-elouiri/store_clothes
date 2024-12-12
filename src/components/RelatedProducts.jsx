import React from "react";

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      title: "Casual Shirt",
      price: "$25",
      image: "/images/p_img2_1.png",
    },
    {
      id: 2,
      title: "Stylish Jacket",
      price: "$45",
      image: "/images/p_img2_1.png",
    },
    {
      id: 3,
      title: "Sneakers",
      price: "$60",
      image: "/images/p_img2_1.png",
    },
    {
      id: 4,
      title: "Sports Watch",
      price: "$80",
      image: "/images/p_img2_1.png",
    },
    {
      id: 5,
      title: "Denim Jeans",
      price: "$35",
      image: "/images/p_img2_1.png",
    },
  ];

  return (
    <div className="py-10 px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          RELATED PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
