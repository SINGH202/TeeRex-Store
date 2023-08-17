import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Cart() {
  return (
    <main className={`flex min-h-screen flex-col items-center border w-full`}>
      <Navbar />
      {/* <ProductCard /> */}
      <div className="flex flex-col gap-10 border border-black w-full max-w-7xl my-10">
        <span className="text-3xl font-medium">Shopping Cart</span>
        <div className="flex flex-col gap-5 max-w-3xl px-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center border border-black h-24">
              <div className="flex gap-5 border border-black">
                <div className="border-[1.5px] border-black rounded-md px-6 py-1">
                  <Image
                    width={15}
                    height={15}
                    src={"/images/down-arrow.svg"}
                    alt={""}
                  />
                </div>
                <button className="text-lg border-[1.5px] border-black rounded-md px-6 py-1.5">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
