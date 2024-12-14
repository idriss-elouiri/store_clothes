import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function RelatedProducts({ currentProductId, category }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${apiUrl}/api/products/get?${category}&limit=5`,
          {
            headers: {
              Authorization: `Bearer YOUR_TOKEN_HERE`, // Use a proper token
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch related products");

        const data = await response.json();

        // Check if the products are available in the response object
        if (data.products && Array.isArray(data.products)) {
          setRelatedProducts(
            data.products.filter((product) => product.id !== currentProductId)
          ); // Filter out the current product
        } else {
          throw new Error(
            "Invalid data format. Expected an array of products."
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchRelatedProducts();
  }, [category, currentProductId, apiUrl]);

  if (loading) return <p>جارٍ تحميل المنتجات ذات الصلة...</p>;
  if (error) return <p>خطأ : {error}</p>;

  return (
    <div className="py-10 px-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          المنتجات ذات الصلة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <Link
              href={`/productDetails/${product._id}`}
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <Image
                src={
                  product.imagesByColor[Object.keys(product.imagesByColor)[0]]
                    .images[0]
                }
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-500 font-bold">{product.price}د.م</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
