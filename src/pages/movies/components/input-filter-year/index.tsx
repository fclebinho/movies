import React, { useState } from "react";
import { debounce } from "lodash";
import { Input, InputProps } from "../../../../components/input";
import { useSearchParams } from "react-router-dom";

const InputFilterYear: React.FC<InputProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string | null>(searchParams.get("year"));

  const _handler = (value: string) => {
    setSearchParams((state) => {
      value ? state.set("year", value) : state.delete("year");

      return state;
    });
  };

  const debouncedHandler = debounce(_handler, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedHandler(e.target.value);
  };

  return (
    <Input
      type="number"
      value={value ?? ""}
      {...props}
      onChange={handleChange}
    />
  );
};

export default InputFilterYear;
