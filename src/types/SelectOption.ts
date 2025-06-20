interface SelectOption<T extends string = string> {
  label: string;
  value: T;
}

export default SelectOption;
