export const Filters = () => {
  return (
    <div className="font-semibold hidden md:flex flex-col items-start gap-4 md:w-96 border px-6 py-5 shadow-lg rounded-md mt-20">
      <span className="text-lg">Colour</span>
      <div className="flex w-full gap-5 items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="bg-gray-400 accent-[#50d71e]"
        />
        <span>Red</span>
      </div>
    </div>
  );
};



export const FilterOptions = () => {
  return (
    <div className="flex w-full gap-5 items-center">
      <input
        type="checkbox"
        name=""
        id=""
        className="bg-gray-400 accent-[#50d71e]"
      />
      <span>Red</span>
    </div>
  );
};
