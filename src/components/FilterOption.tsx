import { FilterOptionProps } from "../../types";

export const FilterOption = ({
  title,
  isEnabled,
  setIsEnabled,
}: FilterOptionProps) => {
  return (
    <div className="flex w-full gap-5 items-center">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isEnabled}
        onChange={() => {
          setIsEnabled();
        }}
        className="bg-gray-400 accent-[#50d71e]"
      />
      <span className="first-letter:uppercase">{title}</span>
    </div>
  );
};
