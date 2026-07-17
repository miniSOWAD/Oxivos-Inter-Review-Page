"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="h-[70vh] flex flex-col justify-center items-center bg-neutral-900 text-white text-center px-4">
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          Elevate Your Style.
        </h1>
        <p className="hero-text text-lg text-neutral-300 mb-8 max-w-md">
          Discover the latest trends in modern fashion with Oxivos.
        </p>
        <Link href="/products" className="hero-text bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition">
          Shop Now
        </Link>
      </section>

      {/* Featured Products Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-80 mb-4 overflow-hidden rounded-xl bg-neutral-100">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-neutral-500">৳{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}