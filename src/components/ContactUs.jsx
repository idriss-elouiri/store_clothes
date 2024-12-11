import React from "react";
import SubscriptionForm from "./Subscription";

export default function ContactUs() {
  return (
    <div className="min-h-screen py-10 px-4">
      {/* Contact Us Section */}
      <div className="max-w-screen-xl mx-auto my-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Location Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.8530022570163!2d-122.4018477!3d37.791594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581472fe3c9c3%3A0x44f66d6c8d8ebf4c!2s54709%20Willms%20Station%2C%20Suite%20350%2C%20Washington%2C%20USA!5e0!3m2!1sen!2sus!4v1697043117837!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="خريطة الموقع"
          ></iframe>
        </div>

        {/* Right Side - Contact Information */}
        <div className="w-full lg:w-1/2 text-slate-800 text-center lg:text-right">
          <h1 className="text-4xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-lg mb-4">
            <span className="font-bold">متجرنا</span>
            <br />
            54709 محطة ويلمز <br />
            جناح 350، واشنطن، الولايات المتحدة الأمريكية
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">الهاتف:</span> (415) 555-0132
            <br />
            <span className="font-bold">البريد الإلكتروني:</span>{" "}
            admin@forever.com
          </p>
          <h2 className="text-2xl font-semibold mt-6">الوظائف في Forever</h2>
          <p className="text-lg mt-4">
            تعرف على المزيد عن فرقنا وفرص العمل المتاحة.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 text-white bg-black rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            استكشاف الوظائف
          </a>
        </div>
      </div>
      <SubscriptionForm />
    </div>
  );
}
