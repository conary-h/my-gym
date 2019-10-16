import React from "react";
import { Router } from "@reach/router";
import Home from "./containers/Home";
import CategoryDetail from "./containers/CategoryDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
      <CategoryDetail path="category/:categoryId" />
    </Router>
  );
}

export default App;
