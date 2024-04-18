import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const Layout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
