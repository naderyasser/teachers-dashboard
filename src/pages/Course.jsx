import React, { useState } from "react";
import Title from "../components/Title";

import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import { UseCoursesTable } from "../components/Tables";

const Course = () => {
  const [searchText, setSearchText] = useState("");
  const [acadimcYearChoosed, setAcadimcYearChoosed] = useState("الكل");
  // const [monthChoosed, setMonthChoosed] = useState("الكل");

  const acadimcYear = ["الكل", 1, 2, 3];
  // const monthsArabic = [
  //   "الكل",
  //   "يناير",
  //   "فبراير",
  //   "مارس",
  //   "إبريل",
  //   "مايو",
  //   "يونيو",
  //   "يوليو",
  //   "أغسطس",
  //   "سبتمبر",
  //   "أكتوبر",
  //   "نوفمبر",
  //   "ديسمبر",
  // ];
  return (
    <div className="p-5 home-screen">
      <Title title="الكورسات" />
      <div className="flex justify-center items-start flex-col gap-3 mt-3">
        <div className="flex justify-center  items-start gap-3 flex-row ">
          <FilterMenu
            title={"السنة الدراسية"}
            data={acadimcYear}
            selected={"الكل"}
            setAcadimcYearChoosed={setAcadimcYearChoosed}
          />
          {/* <FilterMenu
            title={"الشهر"}
            data={monthsArabic}
            selected={"الكل"}
            setMonthChoosed={setMonthChoosed}
          /> */}
        </div>
        <SearchInput setSearchText={setSearchText} searchText={searchText} />
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseCoursesTable
          searchText={searchText}
          acadimcYearChoosed={acadimcYearChoosed}
          // monthChoosed={monthChoosed}
          filter={true}
        />
      </div>
    </div>
  );
};

export default Course;
