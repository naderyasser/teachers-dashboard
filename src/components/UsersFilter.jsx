// import React, { useState } from "react";

import { useRef } from "react";
import FilterMenu from "./FilterMenu";

const UsersFilter = () => {
  const menu = useRef(null);

  // const fakeData = [
  //   {
  //     place: {
  //       type: "المكان",
  //       data: ["الكل", "الإسكندرية", "القاهرة"],
  //     },
  //   },
  //   {
  //     howToLearn: {
  //       type: "الكيفية",
  //       data: ["اون لاين", "سنتر"],
  //     },
  //   },
  //   {
  //     academicYear: {
  //       type: "الصف الدراسي",
  //       data: ["الأول الثانوي", "الثاني الثانوي", "الثالث الثانوي"],
  //     },
  //   },
  //   {
  //     major: {
  //       type: "التخصص",
  //       data: ["علمي رياضة", "علمي علوم", "أدبي"],
  //     },
  //   },
  // ];
  const fakeData = {
    place: {
      type: "المكان",
      data: ["الكل", "الإسكندرية", "القاهرة"],
    },
  };

  const place = ["الكل", "الإسكندرية", "القاهرة"];
  const howToLearn = ["اون لاين", "سنتر"];
  const academicYear = ["الأول الثانوي", "الثاني الثانوي", "الثالث الثانوي"];
  return (
    <div className="mx-8" ref={menu}>
      <FilterMenu
        place={place}
        howToLearn={howToLearn}
        academicYear={academicYear}
        fakeData={fakeData}
      />
    </div>
  );
};

export default UsersFilter;
