import React from "react";

function Nav() {
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
      <ul className=" w-[80%]">
        <li className="mb-3 flex items-center">
          <span className=" w-[30px] rounded-full h-[30px] bg-blue-300 mr-2"></span>
          {""}
          cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className=" w-[30px] rounded-full h-[30px] bg-red-300 mr-2"></span>
          {""}
          cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className=" w-[30px] rounded-full h-[30px] bg-green-300 mr-2"></span>
          {""}
          cat 1
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
