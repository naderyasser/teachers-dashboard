import React, { useState } from "react";

import Title from "../components/Title";
import Stats from "../components/Stats";
import { UseHomeTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [searchText, setSearchText] = useState("");
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
