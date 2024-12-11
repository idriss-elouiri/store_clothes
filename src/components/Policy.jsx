import Image from "next/image";
import React from "react";

export default function PolicySection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Policies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 rounded-lg transition">
            <Image
              src="/images/exchange_icon.png"
              alt="no image"
              width={50}
              height={50}
              className="mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              سياسة التبادل السهلة
            </h3>
            <p className="text-gray-600 text-center">
              نحن نقدم سياسة تبادل خالية من المتاعب.
            </p>
          </div>

          <div className="flex flex-col items-center  p-6 rounded-lg transition">
            <Image
              src="/images/quality_icon.png"
              alt="no image"
              width={50}
              height={50}
              className="mb-4"
            />{" "}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              سياسة الإرجاع لمدة 7 أيام
            </h3>
            <p className="text-gray-600 text-center">
              نحن نقدم سياسة إرجاع مجانية لمدة 7 أيام
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg transition">
            <Image
              src="/images/support_img.png"
              alt="no image"
              width={50}
              height={50}
              className="mb-4"
            />{" "}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              أفضل دعم للعملاء
            </h3>
            <p className="text-gray-600 text-center">
              نحن نقدم دعم العملاء على مدار الساعة طوال أيام الأسبوع
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
