import React from "react";
import { Navbar, NavbarItem } from "../navbar";
import { useLocation } from "react-router-dom";

export const Sidebar: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const location = useLocation();

  console.log("/", location.pathname.endsWith("/"));
  console.log("movies", location.pathname.endsWith("movies"));

  return (
    <Navbar {...props}>
      <NavbarItem
        active={location.pathname.endsWith("/")}
        to="/"
        data-testid="dashboard-link"
      >
        Dashboard
      </NavbarItem>
      <NavbarItem
        active={location.pathname.endsWith("movies")}
        to="/movies"
        data-testid="movie-link"
      >
        List
      </NavbarItem>
    </Navbar>
  );
};
