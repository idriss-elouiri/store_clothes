import React from "react";
import Image from "next/image";

const LatestCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Stylish Jacket",
      price: "$120",
      image: "/images/p_img2_1.png",
    },
    {
      id: 2,
      title: "Classic Watch",
      price: "$250",
      image: "/images/p_img2_1.png",
    },
    {
      id: 3,
      title: "Elegant Shoes",
      price: "$180",
      image: "/images/p_img2_1.png",
    },
    {
      id: 4,
      title: "Modern Bag",
      price: "$90",
      image: "/images/p_img2_1.png",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title and Description */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 w-full mb-4">
            <h2 className="text-4xl font-bold text-slate-900">
              <span className="text-slate-600"> LATEST</span> COLLECTIONS
            </h2>
            <div className="w-16 h-1 bg-slate-900"></div>
          </div>
          <p className="text-slate-600 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
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
    </section>
  );
};

export default LatestCollections;
