import React from "react";
import { sayHello } from "../store/usersSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(sayHello("userthree"))}>home</button>
    </div>
  );
};

export default Home;
