import React from "react";
import Stats from "../components/Stats";
import Title from "../components/Title";
import Graph from "../components/Graph";

const Analysis = () => {
  return (
    <div className="p-5">
      <div>
        <Title title={"الإحصائيات"} />
      </div>
      <div className="mt-5">
        <Stats />
      </div>
      <div className="my-5">
        <Title title={"متوسط درجات الإختبارات"} />
      </div>
      <div className="mb-10">
        <Graph />
      </div>
      <div className="my-5">
        <Title title={"مشاهدات الطلاب"} />
      </div>
      <div className="mb-10">
        <Graph />
      </div>
    </div>
  );
};

export default Analysis;
