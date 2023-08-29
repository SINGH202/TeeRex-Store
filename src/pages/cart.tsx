import { Navbar } from "@/components/Navbar";
import { QuantityDropdown } from "@/components/QuantityDropdown";

export default function Cart() {
  return (
    <main className={`flex min-h-screen flex-col items-center w-full`}>
      <Navbar />
      <div className="flex flex-col gap-10 w-full max-w-7xl my-10 px-5 m">
        <span className="text-3xl font-medium">Shopping Cart</span>
        <div className="flex flex-col gap-5 max-w-3xl sm:px-5 lg:mx-28">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between gap-10 p-2">
              <div className="flex items-center justify-between gap-10 py-2 w-full sm:w-fit">
                <div className="bg-[#d7d7d7] w-24 h-24"></div>
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-bold text-2xl">Pink Round</p>
                  <p className="font-bold text-lg">Pink Round</p>
                </div>
              </div>
              <div className="flex justify-between sm:justify-start w-full sm:w-fit sm:items-end gap-5">
                <QuantityDropdown />
                <button className="text-lg border-[1.5px] border-black rounded-md px-6 py-1.5 w-[130px]">
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
