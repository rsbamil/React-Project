import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { data, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  let [filteredProducts, setFilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category === "undefined") {
      setFilteredProducts(products);
    }
    if (category != "undefined") {
      getProductCategory();
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav></Nav>

      <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="card w-[18%] h-[35vh] p-3 border shadow rounded flex justify-center items-center flex-col mr-10 mb-10"
            >
              <div
                className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
