import React, { useState } from "react";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";
import { UseCodesTable } from "../components/Tables";

const Codes = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-5 home-screen">
      <div className="mb-5">
        <Title title={"الأكواد"} />
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2 md:w-3/4">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center  w-fit cursor-pointer">
          <h1 className="text-white font-medium text-base">إنشاء كود</h1>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseCodesTable searchText={searchText} />
      </div>
    </div>
  );
};

export default Codes;
