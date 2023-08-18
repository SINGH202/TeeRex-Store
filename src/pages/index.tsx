import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { fetchProducts } from "../../utils";
import { useEffect, useState } from "react";
import { ProductProps } from "../../types";
import { Counter } from "../../features/counter/Counter";
import { Pokemon } from "@/components/Pokemon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>();
  const getProduct = () => fetchProducts().then((res) => setProducts(res));
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center border w-full ${inter.className}`}>
      <Navbar />
      {/* <Counter /> */}
      <Pokemon />
      <div className="flex items-start justify-between gap-20 p-10 w-full">
        <Filters />
        <div className="flex flex-col items-center gap-10 w-full">
          <SearchBar />
          <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-16">
            {products?.map((product, index) => (
              <ProductCard {...product} key={product?.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
