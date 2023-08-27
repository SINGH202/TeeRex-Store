import Image from "next/image";
import { useState } from "react";
export const QuantityDropdown = () => {
  const [quantity, setQuantity] = useState(1);
  const [isOptionsVisible, setIsOptionVisible] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOptionVisible(!isOptionsVisible);
      }}
      className="relative cursor-pointer flex items-center justify-center gap-2 border-[1.5px] border-black rounded-md px-6 py-1 w-[130px]">
      <span>Qty: {quantity}</span>
      <Image
        width={15}
        height={15}
        src={"/images/down-arrow.svg"}
        alt={""}
        className={`${isOptionsVisible ? `rotate-180` : ``}`}
      />
      {isOptionsVisible && (
        <div className="flex flex-col gap-0 rounded-md absolute h-14 -bottom-16 bg-white overflow-y-scroll border border-black w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={`item-count-options-${index}`}
              onClick={() => {
                setQuantity(index + 1);
              }}>
              <p className="text-center hover:bg-gray-200">{index + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
