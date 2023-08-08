export type FilterOptionProps = {
  isEnabled: boolean;
  title: string;
  setIsEnabled: () => void;
};

export interface filterOptionType {
  [key: string]: boolean;
}
export type FilterProps = {
  label: string;
  filterOptions: filterOptionType;
  setFilterOptions: (option: string) => void;
};
