import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const FilterMenu = ({ data, title, selected, setAcadimcYearChoosed }) => {
  const [open, setopen] = useState(false);
  const [choosed, setChoosed] = useState(selected);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the div

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setopen(false);
      } else {
        setopen(true);
      }
    };

    // Attach the click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div
      ref={menuRef}
      className="flex justify-center items-center gap-2  w-fit  relative"
    >
      {/* button */}
      <div
        onClick={() => setopen(!open)}
        className=" flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-lightGray hover:bg-gray transition-all cursor-pointer w-fit "
      >
        <div className={`${open ? "rotate-180" : ""} transition-all`}>
          <IoIosArrowUp />
        </div>
        <h2>{`${title} : ${choosed}`}</h2>
      </div>
      {/* menu */}
      <div
        className={`absolute ${
          open ? "block" : "hidden"
        }  right-0 bg-lightGray rounded-lg calc-menu p-3 z-20 box-shadow`}
      >
        {open &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setChoosed(item);
                  setopen(!open);
                  setAcadimcYearChoosed(item);
                }}
                className={`${
                  choosed === item && "bg-gray"
                } py-2 px-3  hover:bg-gray flex justify-start items-center gap-2 rounded-lg `}
              >
                <input
                  className={`hidden `}
                  defaultChecked={item === choosed}
                  onClick={() => {
                    setChoosed(choosed);

                    setopen(!open);
                  }}
                  type="radio"
                  name="place"
                  value={choosed}
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
