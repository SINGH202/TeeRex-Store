import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="flex justify-center items-end gap-5 w-full max-w-md pt-2">
      <input
        type="text"
        className="border-b w-full p-1  outline-0 text-gray-500 focus:text-black focus:border-black"
      />
      <Image
        width={25}
        height={25}
        src={"/images/search-icon.png"}
        alt={""}
        className="mb-1 cursor-pointer"
      />
    </div>
  );
};
