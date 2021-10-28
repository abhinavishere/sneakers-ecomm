import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductDetailsWrapper from "./components/ProductDetailsWrapper/ProductDetailsWrapper";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductDetailsWrapper />
    </div>
  );
};

export default App;
