import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import "./globals.css"; // Ensure your CSS is imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}