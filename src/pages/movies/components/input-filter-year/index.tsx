/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Input, InputProps } from "../../../../components/input";

interface InputFilterYearProps extends Omit<InputProps, "onChange"> {
  onChange(value: string | null): void;
}

export const InputFilterYear: React.FC<InputFilterYearProps> = ({
  onChange,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputValue.trim() !== "" ? inputValue : null);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, 500]);

  return (
    <Input
      {...rest}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
