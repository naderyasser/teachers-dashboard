import { getAllUsers } from "../store/usersSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";

import { UseUsersTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
    dispatch(getAllUsers());
  }, [dispatch, admin, navigate]);

  return (
    <div className="p-5 home-screen ">
      <Title title={"المستخدمين"} />
      <div className="mt-5">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="overflow-x-auto box-shadow mt-5">
        <UseUsersTable searchText={searchText} />
      </div>
    </div>
  );
};

export default Users;
