"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          OXIVOS
        </Link>
        <div className="flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-neutral-400 transition">Home</Link>
          <Link href="/products" className="hover:text-neutral-400 transition">Shop</Link>
          <Link href="/cart" className="relative flex items-center hover:text-neutral-400 transition">
            <ShoppingBag size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}