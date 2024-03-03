import React, { useEffect, useState } from "react";

import Title from "../components/Title";
import Stats from "../components/Stats";
import { UseHomeTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
  }, [navigate, admin]);
  return (
    <div className="p-5 home-screen ">
      <div className="">
        {/* title */}
        <div className="mb-5">
          <Title title={"آخر الإحصائيات"} />
        </div>
        {/* الاحصائيات */}
        <Stats />
      </div>

      {/* title */}
      <div className="mb-5">
        <Title title={"آخر عمليات الشراء"} />
      </div>
      {/* الجدول */}
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <div className="  overflow-x-auto box-shadow mt-5">
        <UseHomeTable searchText={searchText} />
      </div>
    </div>
  );
};

export default Home;
