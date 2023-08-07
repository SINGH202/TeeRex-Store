import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center border w-full ${inter.className}`}>
      <Navbar />
      <div className="flex items-start justify-between gap-20 border border-black p-10 w-full">
        <div className="hidden md:flex flex-col md:w-96 border px-6 py-5 shadow-lg rounded-md"></div>
        <div className="flex flex-col items-center gap-10 w-full border border-black">
          <SearchBar />
          <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-16">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
}
