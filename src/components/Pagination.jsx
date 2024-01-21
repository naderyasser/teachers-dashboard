import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  currentPage < 1 && setCurrentPage(1);
  const fakeData = [
    "useOne1",
    "useOne2",
    "useOne3",
    "useOne4",
    "useOne5",
    "useOne6",
    "useOne7",
    "useOne8",
    "useOne9",
    "useOne10",
    "useOne11",
    "useOne12",
  ];
  let recordsNum = 6;
  let indexOfLastRecord = currentPage * recordsNum;
  let indexOfFirstRecord = indexOfLastRecord - recordsNum;
  let currentRecords = fakeData.slice(indexOfFirstRecord, indexOfLastRecord);
  let pagesNum = Math.ceil(fakeData.length / recordsNum);
  const pageNumbers = [...Array(pagesNum + 1).keys()].slice(1);
  currentPage > pageNumbers[pageNumbers.length - 1] &&
    setCurrentPage(pageNumbers[pageNumbers.length - 1]);

  console.log(currentRecords);

  return (
    <div className="flex gap-2  items-center">
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        variant="text"
        className="flex items-center gap-2 bg-gray "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        <h1 className="font-medium text-sm">السابق</h1>
      </Button>
      {/* ارقام الصفحات */}
      {pageNumbers.map((num, inex) => {
        return (
          <div
            onClick={() => setCurrentPage(num)}
            key={inex}
            className={`${
              currentPage === num ? "bg-blue-gray-300" : ""
            } cursor-pointer flex justify-center items-center w-10 h-10 rounded-full  bg-lightGray`}
          >
            <h1 className="">{num}</h1>
          </div>
        );
      })}
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        variant="text"
        className="flex items-center gap-2 bg-gray"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        <h1 className="font-medium text-sm">التالي</h1>
      </Button>
    </div>
  );
};

export default Pagination;
