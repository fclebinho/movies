import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/movies">List</Link>
    </div>
  );
};

export default Sidebar;
