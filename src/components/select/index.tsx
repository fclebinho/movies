import React, { forwardRef } from "react";

export type RefHTMLInputElement = HTMLSelectElement;

const Select = forwardRef<
  RefHTMLInputElement,
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
>(({ children, style, ...rest }, ref) => {
  return (
    <select
      ref={ref}
      {...rest}
      style={{
        padding: 6,
        borderRadius: 3,
        border: "1px solid #b0bec5",
        ...style,
      }}
    >
      {children}
    </select>
  );
});

export default Select;
