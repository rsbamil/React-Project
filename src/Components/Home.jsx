import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(productContext);
  console.log(products);
  return products ? (
    <>
      <Nav></Nav>

      <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden">
        {products.map((p, i) => (
          <Link
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
