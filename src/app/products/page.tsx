"use client";
import { useState } from "react";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-8 pt-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">All Products</h1>
      
      {/* Category Filter - Dark Theme */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
              activeCategory === category 
                ? "bg-white text-black" 
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-80 mb-4 overflow-hidden rounded-xl bg-neutral-800">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-500" 
                  />
                  {!product.inStock && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Out of Stock</div>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-white">{product.name}</h3>
                <p className="text-neutral-400">৳{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}