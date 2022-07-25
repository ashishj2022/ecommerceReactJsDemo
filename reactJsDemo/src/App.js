import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./CustomStyle/style.scss";
//Pages
import Products from "./Products/Products";
import ProductsDeatils from "./Products/ProductsDeatils";

class App extends Component {
  render() {
    return (
      <Router>
          <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/products-deatils/:id" element={<ProductsDeatils />} />
          </Routes>
      </Router>
    );
  }
}

export default App;
