import React from "react";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fontWeight?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  fontWeight,
  ...rest
}) => {
  return (
    <div {...rest} style={{ padding: 6, fontWeight: fontWeight }}>
      {children}
    </div>
  );
};
