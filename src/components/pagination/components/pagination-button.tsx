import React from "react";
import ButtonIcon from "../../button-icon";

interface PaginationButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  active = false,
  ...rest
}) => {
  return (
    <ButtonIcon
      {...rest}
      style={{
        height: 24,
        borderRadius: 0,
        background: active ? "#0F87CF" : "none",
        color: active ? "white" : "black",
      }}
    >
      {children}
    </ButtonIcon>
  );
};

export default PaginationButton;
