import React from "react";

import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Settings = () => {
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
  }, [admin, navigate]);
  return (
    <div>
      {/* <Table /> */}
      <Pagination />
    </div>
  );
};

export default Settings;
