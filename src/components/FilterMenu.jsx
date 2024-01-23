import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const FilterMenu = ({ place, fakeData }) => {
  // console.log(fakeData.place.type);
  const [open, setopen] = useState(false);
  const [data, setData] = useState("الكل");

  return (
    <div className="flex justify-center items-center gap-2  w-fit mb-3 relative">
      {fakeData &&
        fakeData.place.data.map((item) => {
          console.log(item);
          return (
            <div
              onClick={() => setopen(!open)}
              className="flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-lightGray hover:bg-gray transition-all cursor-pointer w-fit "
            >
              <div className={`${open ? "rotate-180" : ""} transition-all`}>
                <IoIosArrowUp />
              </div>
              <h2>{`${fakeData.place.type} : ${data}`}</h2>
            </div>
          );
        })}
      <div
        className={`absolute ${
          open ? "block" : "hidden"
        }  right-0 bg-lightGray rounded-lg calc-menu p-3`}
      >
        {open &&
          place.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setData(item);
                  setopen(!open);
                }}
                className=" py-2 px-3 z-10 hover:bg-gray flex justify-start items-center gap-2 rounded-lg"
              >
                <input
                  defaultChecked={item === data}
                  onClick={() => {
                    setData(item);
                    setopen(!open);
                  }}
                  type="radio"
                  name="place"
                  value={item}
                  id="index"
                />
                <label htmlFor="index">{item}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterMenu;
