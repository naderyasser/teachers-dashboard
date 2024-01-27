// import avatar from "../img/avatar.png";
// import Pagination from "../components/Pagination";
// import UsersFilter from "../components/UsersFilter";
import { getAllUsers } from "../store/usersSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "../components/Table";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      {/* <div>
        <UsersFilter />
      </div> */}

      <Table />
    </div>
  );
};

export default Users;
