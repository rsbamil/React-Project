import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(productContext);

  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5 ">
      <a
        className="py-3 border-blue-300 text-blue-300 px-5 border rounded "
        href="/create"
      >
        Add new product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className=" w-[80%]">
        {distinctCategory.map((cat, i) => (
          <Link
            key={i}
            to={`/?category=${cat}`}
            className="mb-3 flex items-center"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[30px] rounded-full h-[30px] mr-2"
            ></span>
            {""}
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
