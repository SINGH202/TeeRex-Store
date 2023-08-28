import { Navbar } from "@/components/Navbar";
import { QuantityDropdown } from "@/components/QuantityDrowdown";

export default function Cart() {
  return (
    <main className={`flex min-h-screen flex-col items-center border w-full`}>
      <Navbar />
      <div className="flex flex-col gap-10 w-full max-w-7xl my-10 px-5">
        <span className="text-3xl font-medium">Shopping Cart</span>
        <div className="flex flex-col gap-5 max-w-3xl px-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-10 border border-black py-2">
              <div className="bg-[#d7d7d7] w-24 h-24"></div>
              <div className="border"></div>
              <div className="flex items-end gap-5">
                <QuantityDropdown />
                <button className="text-lg border-[1.5px] border-black rounded-md px-6 py-1.5">
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="border border-black"></div>
          <div className="flex items-center justify-center gap-10 text-lg">
            <span className="font-bold">Total amount</span>
            <span className="font-medium">Rs. {2200}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
