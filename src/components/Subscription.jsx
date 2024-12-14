import React from "react";

export default function SubscriptionForm() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold text-gray-900 ">
          اشترك الآن واحصل على خصم 20%
        </h3>
      </div>

      {/* Form Section */}
      <form className="flex flex-col md:flex-row items-center w-full max-w-lg px-4">
        <input
          type="email"
          placeholder="ادخل بريدك الالكتروني"
          className="px-4 py-3 w-full mb-4 md:mb-0 border border-gray-300 rounded-lg rounded-r-none text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full md:w-auto px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg rounded-l-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          اشترك
        </button>
      </form>
    </div>
  );
}
