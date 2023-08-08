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

export type ProductProps = {
  color: string;
  currency: string;
  gender: string;
  id: number;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

