export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500&q=80",
    rating: 4.5,
    colors: ["White", "Navy"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "A premium cotton panjabi perfect for festive occasions and casual wear.",
  },
  {
    id: 2,
    name: "Urban Denim Jacket",
    category: "Outerwear",
    price: 2990,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80",
    rating: 4.8,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description: "Classic denim jacket with a modern tailored fit.",
  },
];