import React from "react";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import Home from "./pages/Home";
import Temp from "./components/Temp";


function App() {
  return (
    <BrowserRouter>
      <Home />
      <Temp/>
    </BrowserRouter>
  );
}

export default App;
