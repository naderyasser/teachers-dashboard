import React, { useEffect } from "react";
import Stats from "../components/Stats";
import Title from "../components/Title";
import Graph from "../components/Graph";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Analysis = () => {
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
  }, [admin, navigate]);
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
