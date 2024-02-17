import React from "react";

const Model = ({ setClose }) => {
  return (
    <div
      className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen   
     "
    >
      <div className="min-w-96 rounded-md bg-white min-h-52 flex flex-col justify-center items-center gap-5  z-30   ">
        <h1 className="text-3xl text-darkGray">هل تريد الخروج</h1>
        <div className="flex justify-between items-center gap-12 ">
          <button
            onClick={() => setClose(false)}
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 bg-gray hover:bg-blue-gray-400 transition-all rounded-full"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 bg-red-500 rounded-full"
          >
            خروج
          </button>
        </div>
      </div>
      <div
        onClick={() => setClose(false)}
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
      ></div>
    </div>
  );
};

export default Model;
