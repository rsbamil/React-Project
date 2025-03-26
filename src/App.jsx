import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
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

      <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap ">
        <div className="card w-[18%] h-[35vh] p-3 border shadow rounded flex justify-center items-center flex-col mr-10 mb-10">
          <div
            className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Item1</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
