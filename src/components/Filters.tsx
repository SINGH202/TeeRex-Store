import { useState } from "react";
import { filterOptionType } from "../../types";
import { Filter } from "./Filter";

export const Filters = () => {
  const [colorFilter, setColorFilter] = useState<filterOptionType>({
    red: false,
    blue: false,
    green: false,
  });
  const [genderFilter, setGenderFilter] = useState<filterOptionType>({
    man: false,
    women: false,
  });
  const [priceFilter, setPriceFilter] = useState<filterOptionType>({
    "0-250": false,
    "251-450": false,
    "450 or higher": false,
  });
  const [typeFilter, setTypeFilter] = useState<filterOptionType>({
    polo: false,
    hoodie: false,
    basic: false,
  });

  return (
    <div className="font-semibold hidden md:flex flex-col items-start gap-5 md:w-96 border px-6 py-5 shadow-lg rounded-md mt-20">
      <Filter
        label={"Color"}
        filterOptions={colorFilter}
        setFilterOptions={(filter) => {
          console.log(filter);
          setColorFilter({ ...colorFilter, [filter]: !colorFilter[filter] });
        }}
      />

      <Filter
        label={"Gender"}
        filterOptions={genderFilter}
        setFilterOptions={(filter) => {
          console.log(filter);
          setGenderFilter({ ...genderFilter, [filter]: !genderFilter[filter] });
        }}
      />

      <Filter
        label={"Price"}
        filterOptions={priceFilter}
        setFilterOptions={(filter) => {
          console.log(filter);
          setPriceFilter({ ...priceFilter, [filter]: !priceFilter[filter] });
        }}
      />

      <Filter
        label={"Type"}
        filterOptions={typeFilter}
        setFilterOptions={(filter) => {
          console.log(filter);
          setTypeFilter({ ...typeFilter, [filter]: !typeFilter[filter] });
        }}
      />
    </div>
  );
};
