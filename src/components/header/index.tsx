import React from "react";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div
      {...props}
      style={{
        padding: 16,
        backgroundColor: "black",
        color: "white",
      }}
    >
      Frontend ReactJS Test
    </div>
  );
};

export default Header;
