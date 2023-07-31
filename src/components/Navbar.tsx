import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-medium text-xl h-20 px-5 sm:px-16 w-full bg-[#F1F0F0]">
      <span className="">TeeRex Store</span>
      <div className="flex items-center justify-end gap-10">
        <span>Products</span>
        <div className="bg-[#D3D3D3] p-3 rounded-md relative">
          <span className="absolute text-sm top-1 right-1">1</span>
          <Image
            width={30}
            height={30}
            src={"/images/cart-icon.png"}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};
