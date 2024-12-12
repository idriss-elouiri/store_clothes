"use client";

import React from "react";
import { useCart } from "./CartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 10.0; // Static shipping fee
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800">عربة التسوق الخاصة بك</h2>
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-6"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item._id)}
                      className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item._id)}
                      className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
            <span>Subtotal</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
            <span>Shipping Fee</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-gray-800 mb-6">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <Link href={"/placeOrder"}>
            <button className="w-full py-3 px-3 text-white bg-black rounded-lg transition">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
