import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-blue-300 absolute left-[17%] top-[3%]">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
