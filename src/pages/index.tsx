import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/features/productSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((store: any) => store.products);

  useEffect(() => {
    dispatch(getProducts() as any);
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center border w-full ${inter.className}`}>
      <Navbar />

      <div className="flex items-start justify-between gap-20 p-10 w-full">
        <Filters />
        <div className="flex flex-col items-center gap-10 w-full">
          <SearchBar />
          <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-16">
            {products?.map((product: any, index: number) => (
              <ProductCard {...product} key={product?.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
