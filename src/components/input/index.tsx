import React, { forwardRef } from "react";

export type Ref = HTMLInputElement;

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = forwardRef<Ref, InputProps>(({ style, ...rest }, ref) => (
  <input
    ref={ref}
    {...rest}
    style={{
      padding: 6,
      borderRadius: 3,
      border: "1px solid #b0bec5",
      ...style,
    }}
  />
));
