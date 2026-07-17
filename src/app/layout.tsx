"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          OXIVOS
        </Link>
        <div className="flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-neutral-500 transition">Home</Link>
          <Link href="/products" className="hover:text-neutral-500 transition">Shop</Link>
          <Link href="/cart" className="relative flex items-center hover:text-neutral-500 transition">
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}