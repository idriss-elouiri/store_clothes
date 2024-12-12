import Footer from "@/components/Footer";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import React from "react";

export default function ProductDetailsPage() {
  return (
    <div>
      <ProductDetails />
      <RelatedProducts/>
      <Footer/>
    </div>
  );
}
