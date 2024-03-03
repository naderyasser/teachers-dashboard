import React, { useEffect, useState } from "react";

import Graph from "../components/Graph";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";
import { UseExamsTable } from "../components/Tables";
import FilterMenu from "../components/FilterMenu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Exams = () => {
  const [searchText, setSearchText] = useState("");
  const [acadimcYearChoosed, setAcadimcYearChoosed] = useState("الكل");
  const [monthChoosed, setMonthChoosed] = useState("الكل");

  const acadimcYear = ["الكل", 1, 2, 3];
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
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
  }, [admin, navigate]);

  return (
    <div className="p-5 home-screen">
      <div className="mb-5">
        <Title title={"متوسط درجات الطلاب"} />
      </div>
      <Graph />
      <div className="my-5">
        <Title title={"الإختبارات"} />
      </div>
      <div className="flex justify-start  items-start gap-3 flex-row ">
        <FilterMenu
          title={"السنة الدراسية"}
          data={acadimcYear}
          selected={"الكل"}
          setAcadimcYearChoosed={setAcadimcYearChoosed}
        />
        <FilterMenu
          title={"الشهر"}
          data={monthsArabic}
          selected={"الكل"}
          setMonthChoosed={setMonthChoosed}
        />
      </div>
      <div className="my-5">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="mt-5 overflow-x-auto box-shadow">
        <UseExamsTable
          acadimcYearChoosed={acadimcYearChoosed}
          searchText={searchText}
        />
      </div>
    </div>
  );
};

export default Exams;
