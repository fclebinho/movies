import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import Header from "./components/header";
import { useMediaQuery } from "react-responsive";

const Layout: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <main style={{ height: "100%", display: "table", width: "100%" }}>
      <Header style={{ display: "table-row" }} />
      <div
        style={
          isDesktopOrLaptop
            ? { height: "100%", display: "table", width: "100%" }
            : undefined
        }
      >
        <Sidebar
          style={
            isDesktopOrLaptop
              ? { display: "table-cell", minWidth: 200, padding: 13 }
              : undefined
          }
        />
        <div
          style={
            isDesktopOrLaptop
              ? {
                  display: "table-cell",
                  width: "100%",
                  paddingInline: 24,
                  paddingBlock: 12,
                }
              : undefined
          }
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
