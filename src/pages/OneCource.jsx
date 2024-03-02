import React, { useRef, useState } from "react";
import Title from "../components/Title";
import { UseLessonsForOneCourse } from "../components/Tables";
import SearchInput from "../components/SearchInput";
import FilterMenu from "../components/FilterMenu";
import { useDispatch } from "react-redux";
import { getLessons, initLesson } from "../store/statsSlice";
import { useParams } from "react-router-dom";

const OneCource = () => {
  const param = useParams();

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [menuSelected, setMenuSelected] = useState("");
  const finalMenu =
    menuSelected === "قسم"
      ? "section"
      : menuSelected === "فيديو"
      ? "video"
      : "exam";

  const menuData = ["قسم", "فيديو", "امتحان"];
  const name = useRef(null);
  const videoURL = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      courseId: param.id,
      iframeCode: videoURL.current.value,
      Ltype: finalMenu,
    };

    dispatch(initLesson(data)).then((e) => {
      if (e.payload.success === true) {
        dispatch(getLessons(param.id));
      }
    });
  };

  return (
    <div className="home-screen">
      <div className="mt-5">
        <Title title={param.name} />
      </div>
      <form
        className=" p-5 my-5 mb-8 border-b border-gray "
        onSubmit={formHandler}
      >
        <div className=" flex flex-col md:flex-row justify-start items-center gap-3">
          <input
            required
            ref={name}
            type="text"
            placeholder="الاسم"
            className="block w-full  ml-3 ref bg-lightGray focus:bg-gray md:w-1/4 mb-3  border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          />
          <input
            required
            ref={videoURL}
            type="text"
            placeholder="video URL"
            className="block ref w-full bg-lightGray focus:bg-gray md:w-1/4 mb-3  border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <FilterMenu
            data={menuData}
            title={"النوع"}
            selected={"قسم"}
            setAcadimcYearChoosed={setMenuSelected}
          />

          <button
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full"
          >
            إنشاء
          </button>
        </div>
      </form>
      <div className="w-full md:w-3/4">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseLessonsForOneCourse searchText={searchText} id={param.id} />
      </div>
    </div>
  );
};

export default OneCource;
