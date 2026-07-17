"use client";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-12 pt-24"
    >
      <div className="relative h-[60vh] rounded-2xl overflow-hidden bg-neutral-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="text-sm text-neutral-500 uppercase tracking-wider">{product.category}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
        <p className="text-2xl mb-6">৳{product.price}</p>
        <p className="text-neutral-600 mb-8">{product.description}</p>
        
        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Size</h3>
          <div className="flex gap-3">
            {product.sizes.map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-full border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-neutral-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => addToCart({ ...product, quantity: 1, selectedSize, selectedColor })}
          className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-neutral-800 transition transform active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}