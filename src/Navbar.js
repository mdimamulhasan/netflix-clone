import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });

  return (
      <div className={`nav ${show && "nav_black"}`}>
      <img src="/logo.png" alt="logo" className="nav_logo" />
      <img src="/smile.png" alt="smile" className="nav_avater" />
    </div>
  );
};

export default Navbar;