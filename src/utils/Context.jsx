import React, { createContext, useEffect, useState } from "react";
import axios from "./Axios";
export const productContext = createContext();
const Context = (props) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
