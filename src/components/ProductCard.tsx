import Image from "next/image";

export const ProductCard = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-md p-4 w-72 h-64">
      <div className="w-full border bg-[#F1F0F0] h-5/6"></div>
      <div className="w-full flex items-center justify-end gap-5 text-lg">
        <span className="font-bold">Rs. 200</span>
        <button className="px-2 py-0.5 rounded-md bg-black text-[#F1F0F0] font-light">
          Add to cart
        </button>
      </div>
    </div>
  );
};
