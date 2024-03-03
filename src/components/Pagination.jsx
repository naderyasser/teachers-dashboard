import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const Pagination = ({
  filter,
  data,
  setCurrentDate,
  searchText,
  acadimcYearChoosed,
  withoutSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterdData = filter
    ? data
        .filter((item) =>
          acadimcYearChoosed === "الكل"
            ? item
            : item.academic_year == acadimcYearChoosed
        )
        .filter((user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase())
        )
    : withoutSearch
    ? data
    : data.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );

  const recordsNum = 10;
  const indexOfLastRecord = currentPage * recordsNum;
  const indexOfFirstRecord = indexOfLastRecord - recordsNum;
  const currentRecords = filterdData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  useEffect(() => {
    setCurrentDate(currentRecords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data, searchText, setCurrentDate, acadimcYearChoosed]); // Only run effect when currentPage or currentRecords change

  const pagesNum = Math.ceil(filterdData.length / recordsNum);
  const pageNumbers = Array.from({ length: pagesNum }, (_, i) => i + 1);

  const handlePageClick = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => handlePageClick(currentPage - 1)}
        variant="text"
        className="flex items-center gap-2 bg-gray py-2 px-3 font-noto font-normal text-sm"
        disabled={currentPage === 1}
      >
        السابق
      </Button>

      {pageNumbers.map((num) => (
        <div
          key={num}
          onClick={() => handlePageClick(num)}
          className={`${
            currentPage === num ? "bg-darkGray text-white" : ""
          } cursor-pointer flex justify-center items-center w-10 h-10 rounded-full`}
        >
          {num}
        </div>
      ))}
      <Button
        onClick={() => handlePageClick(currentPage + 1)}
        variant="text"
        className="flex items-center gap-2 bg-gray py-2 px-3 font-noto font-normal text-sm"
        disabled={currentPage === pagesNum || currentRecords.length === 0}
      >
        التالي
      </Button>
    </div>
  );
};

export default Pagination;
