import React, { useState } from "react";
import { Link } from "react-router-dom";
import './headerStyle.scss'

const HeaderComponent = () => {
  return (
   <nav className="navbar navbar-light bg-black">
  <a className="navbar-brand cpy-font">Cygnet InfoTech</a>
  <form className="form-inline">
  <Link to="/" className="ftn-color">All Products</Link>
  </form>
</nav>

  );
};

export default HeaderComponent;