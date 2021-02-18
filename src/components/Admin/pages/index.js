import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      Admin Home Page
    </div>
  );
};

export default Home;
