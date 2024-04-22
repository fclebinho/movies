import React from "react";

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 4px 8px #d3d3d3",
        padding: 13,
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div style={{ paddingBottom: 12 }} {...rest}>
      <span style={{ fontWeight: "bold", fontSize: 16 }}>{children}</span>
    </div>
  );
};
