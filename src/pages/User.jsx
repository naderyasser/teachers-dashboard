/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCourses, getOneUser } from "../store/usersSlice";
import bg from "../img/Rectangle 5011.png";
import avatar from "../img/avatar.png";
import { UseOneUserCourses } from "../components/Tables";
import FilterMenu from "../components/FilterMenu";
import { enrollCourseForUser } from "../store/statsSlice";

const User = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    // if (admin === "") {
    //   navigate("/signin");
    // }
    dispatch(getOneUser(param));
    dispatch(getAllCourses());
  }, [dispatch, param, admin, navigate]);
  const [choosed, setChoosed] = useState(1);
  const state = useSelector((state) => state && state.users.oneUser);

  const courses = useSelector((state) => state && state.users.courses).courses;
  const isLoading = useSelector((state) => state.stats.isLoading);

  const [courseChoosed, setCourseChoosed] = useState([]);
  const oneCourse =
    courses && courses.find((ele) => ele.name === courseChoosed);

  const data = {
    email: state && state.user.email,
    course_id: oneCourse && oneCourse.id,
  };
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(enrollCourseForUser(data)).then((e) => {
      e.payload.success && setCourseChoosed("");
    });
  };
  return (
    <div>
      {/* top */}
      <div className="relative gap-3 h-1/3 flex flex-col justify-center items-center p-5">
        <img
          className={`absolute max-w-none left-1/2 -translate-x-1/2   bottom-0 ${
            window.innerWidth > 992 && "w-full"
          }   `}
          src={bg}
          alt=""
        />
        <div className="w-28 h-28 z-10 rounded-full overflow-hidden">
          <img
            src={state ? state.user.profile_img : avatar}
            alt=""
            className="w-full"
          />
        </div>
        <h1 className="text-white z-10 text-2xl">{state && state.user.name}</h1>
        <p className="text-white  z-10 text-xs opacity-70 ">
          {state && state.user.email}
        </p>
      </div>
      {/* main */}

      <div className="flex justify-center items-center mt-5 flex-col gap-5 mx-5">
        {/* toggel */}
        <div className="flex justify-center items-center gap-3">
          <h1
            onClick={() => setChoosed(1)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 1 && "bg-darckBlue text-white"
            }`}
          >
            المعلومات
          </h1>
          <h1
            onClick={() => setChoosed(2)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 2 && "bg-darckBlue text-white"
            }`}
          >
            الكورسات
          </h1>
          <h1
            onClick={() => setChoosed(3)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 3 && "bg-darckBlue text-white"
            }`}
          >
            الإختبارات
          </h1>
        </div>
        {/* content */}
        {choosed === 1 ? (
          <div className="p-5 rounded-md bg-lightGray border border-gray flex flex-col gap-4 ">
            <div className="flex justify-between gap-7 items-center ">
              <h1>الاسم</h1>
              <h1 className="flex-grow text-end">{state && state.user.name}</h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>السنة الدراسية</h1>
              <h1 className="flex-grow text-end">
                {state && state.user.academic_year}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>التخصص</h1>
              <h1 className="flex-grow text-end">
                {state && state.user.academic_section}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>البريد الاليكتروني</h1>
              <h1 className="flex-grow text-end">
                {state && state.user.email}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>رقم التلفون</h1>
              <h1 className="flex-grow text-end">
                {state && state.user.phone_number}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>رقم ولي الامر</h1>
              <h1 className="flex-grow text-end">
                {state && state.user.father_number}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>المحافظة</h1>
              <h1 className="flex-grow text-end">{state && state.user.city}</h1>
            </div>
          </div>
        ) : choosed === 2 ? (
          <div className="w-full">
            <form
              className=" p-5 my-5 mb-8 border-b border-gray "
              onSubmit={formHandler}
            >
              <div className="flex justify-between items-center">
                <FilterMenu
                  data={courses}
                  title={"الكورس"}
                  selected={""}
                  setAcadimcYearChoosed={setCourseChoosed}
                  notName={true}
                />

                <button
                  type="submit"
                  className="text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full"
                >
                  {isLoading ? "يتم الإنشاء" : "إضافة"}
                </button>
              </div>
            </form>
            <div className="box-shadow w-full">
              <UseOneUserCourses email={param} />
            </div>
          </div>
        ) : (
          <div>1</div>
        )}
      </div>
    </div>
  );
};

export default User;
