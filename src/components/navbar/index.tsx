import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <ul>{children}</ul>
    </div>
  );
};

interface SidebarItemProps extends React.RefAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  active?: boolean;
}

export const NavbarItem: React.FC<SidebarItemProps> = ({
  children,
  active,
  ...rest
}) => {
  return (
    <li style={{ marginBottom: 8 }}>
      <Link
        style={{
          textDecoration: "none",
          color: active ? "#0F87CF" : "gray",
          fontWeight: active ? "600" : undefined,
        }}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
};
