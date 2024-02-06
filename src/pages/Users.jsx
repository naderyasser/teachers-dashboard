import { getAllUsers } from "../store/usersSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../components/Title";

import { UseUsersTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";

const Users = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
