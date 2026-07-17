"use client";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-neutral-500">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          {cart.map((item, i) => (
            <motion.div 
              key={`${item.id}-${i}`}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex gap-6 border-b pb-6"
            >
              <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-neutral-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-neutral-500 text-sm">Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">৳{item.price} x {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-neutral-50 p-6 rounded-2xl h-fit">
          <h3 className="font-bold text-xl mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4 border-b pb-4">
            <span>Subtotal</span>
            <span className="font-medium">৳{totalPrice}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}