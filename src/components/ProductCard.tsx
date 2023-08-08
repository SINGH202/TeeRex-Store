/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ProductProps } from "../../types";

export const ProductCard = ({
  color,
  currency,
  gender,
  id,
  imageURL,
  name,
  price,
  quantity,
  type,
}: ProductProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-md p-4 w-72 h-64 border">
      <div className="w-full border bg-[#F1F0F0] h-5/6">
        <img className="w-full h-full" src={imageURL} alt={name} />
      </div>
      <div className="w-full flex items-center justify-end gap-5 text-lg">
        <span className="font-bold">Rs. {price}</span>
        <button className="px-2 py-0.5 rounded-md bg-black text-[#F1F0F0] font-light">
          Add to cart
        </button>
      </div>
    </div>
  );
};
