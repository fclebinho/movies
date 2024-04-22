import React from "react";
import Select from "../select";
import { useSearchParams } from "react-router-dom";

const InputFilterWinner: React.FC<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
> = ({ children, ...rest }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((state) => {
      e.target.value
        ? state.set("winner", e.target.value)
        : state.delete("winner");

      return state;
    });
  };

  return (
    <Select
      {...rest}
      defaultValue={searchParams.get("winner") ?? ""}
      onChange={handleSelectChange}
    >
      {children}
    </Select>
  );
};

export default InputFilterWinner;
