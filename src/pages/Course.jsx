import React, { useState } from "react";
import Title from "../components/Title";
import TableHome from "../components/TableHome";
import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import { UseCoursesTable } from "../components/Tables";

const Course = () => {
  const [searchText, setSearchText] = useState("");

  const acadimcYear = [
    "الكل",
    "الاول الثانوي",
    "الثاني الثانوي",
    "الثالث الثانوي",
  ];
  const monthsArabic = [
    "الكل",
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return (
    <div className="p-5 home-screen">
      <Title title="الكورسات" />
      <div className="flex justify-center items-start flex-col gap-3 mt-3">
        <div className="flex justify-center  items-start gap-3 flex-row ">
          <FilterMenu
            title={"السنة الدراسية"}
            data={acadimcYear}
            selected={"الكل"}
          />
          <FilterMenu title={"الشهر"} data={monthsArabic} selected={"الكل"} />
        </div>
        <SearchInput setSearchText={setSearchText} searchText={searchText} />
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseCoursesTable searchText={searchText} />
      </div>
    </div>
  );
};

export default Course;
