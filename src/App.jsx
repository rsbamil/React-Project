import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="h-screen w-screen flex ">
      <Link to="/" className="text-blue-300 absolute">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
