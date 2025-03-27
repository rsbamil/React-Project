import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
function Create() {
  const [products, setproducts] = useContext(productContext);
  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5 ||
      category.trim().length < 5 ||
      image.trim().length < 5
    ) {
      alert("All fields should be filled with at least 5 characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
  };
  console.log(products);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  return (
    <form
      onSubmit={addProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col gap-10 items-center"
    >
      <h1 className="text-5xl text-blue-500  tracking-tight">
        Add New Product
      </h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded-md p-3 w-[40%]"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded-md p-3 w-[40%]"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-[49%] flex gap-3 justify-center">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded-md p-3 w-[40%]"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="Number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded-md p-3 w-[40%]"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        className="text-1xl bg-zinc-100 rounded-md p-3 w-[40%]"
        value={description}
        placeholder="Description"
      ></textarea>
      <div className="w-[40%]">
        <button
          className="py-3 border-blue-300 text-blue-300 px-7 border rounded cursor-pointer"
          href="/create"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Create;
