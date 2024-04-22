import React from "react";

const ButtonIcon: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, style, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        color: "white",
        background: "#0F87CF",
        borderRadius: 3,
        cursor: "pointer",
        width: 32,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
