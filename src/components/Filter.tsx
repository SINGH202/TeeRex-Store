import { FilterProps } from "../../types";
import { FilterOption } from "./FilterOption";


export const Filter = ({
  filterOptions,
  label,
  setFilterOptions,
}: FilterProps) => {
  return (
    <div className="flex-col items-start gap-3">
      <span className="text-lg">{label}</span>
      {Object.keys(filterOptions).map((color, index) => (
        <FilterOption
          key={index}
          isEnabled={filterOptions[color]}
          title={color}
          setIsEnabled={() => {
            setFilterOptions(color);
          }}
        />
      ))}
    </div>
  );
};
