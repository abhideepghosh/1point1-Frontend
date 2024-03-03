import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
