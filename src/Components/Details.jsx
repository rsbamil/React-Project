import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";

function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const singleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    singleProduct();
  }, []);
  return product ? (
    <div className="flex items-center justify-between w-[70%] h-full  m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[45%] "
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl tracking-tighter ">{product.title}</h1>
        <h2 className="text-zinc-400 my-5">{product.category}</h2>
        <h2 className="text-red-300 mb-3">{product.price}</h2>
        <p className="mb-5 text-sm">{product.description}</p>
        <Link className="py-3 border-blue-300 text-blue-300 px-5 border rounded mr-5">
          Edit
        </Link>
        <Link className="py-3 border-blue-300 text-red-500 px-5 border rounded ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
