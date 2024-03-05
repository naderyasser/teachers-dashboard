/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCourses, getOneUser, getUserCourses } from "../store/usersSlice";
import bg from "../img/Rectangle 5011.png";
import avatar from "../img/avatar.png";
import { UseOneUserCourses } from "../components/Tables";
import FilterMenu from "../components/FilterMenu";
import { enrollCourseForUser } from "../store/statsSlice";
import { Toaster, toast } from "sonner";
import userRemove from "../img/remove-user.png";
import userEdit from "../img/user-avatar.png";
import editPassword from "../img/password.png";
import Model from "../components/Model";
import UserModel from "../components/UserModel";
import PasswordModel from "../components/PasswordModel";
import NotificationModel from "../components/NotificationModel";
import sendImg from "../img/direct.png";
import Cookies from "js-cookie";

const User = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.user);
  const [classRed, setClassRed] = useState("");

  const navigate = useNavigate();

  const [choosed, setChoosed] = useState(1);
  const state = useSelector((state) => state && state.users.oneUser);
  useEffect(() => {
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }

    if (choosed === 2) {
      setCourseChoosed([]);
      setClassRed("");
    }
    dispatch(getOneUser(param));
    dispatch(getAllCourses());
  }, [dispatch, param, admin, navigate, choosed]);

  const courses = useSelector((state) => state && state.users.courses).courses;
  const isLoading = useSelector((state) => state.stats.isLoading);

  const [courseChoosed, setCourseChoosed] = useState([]);
  const [menuSelected, setMenuSelected] = useState("");
  const oneCourse =
    courses && courses.find((ele) => ele.name === courseChoosed);

  const data = {
    email: state && state.user.email,
    course_id: oneCourse && oneCourse.id,
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (oneCourse === undefined) {
      setClassRed("border border-red-400");
    } else {
      setClassRed("");
      dispatch(enrollCourseForUser(data)).then((e) => {
        if (e.payload.success === true) {
          setCourseChoosed([]);
          setMenuSelected("");
          dispatch(getUserCourses(param.email));
          toast.success("تم الاضافة");
        }
      });
    }
  };
  const [close, setClose] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [passwordModel, setPasswordModel] = useState(false);
  const [notiModel, setNotiModel] = useState(false);

  return (
    <div className="home-screen ">
      <Toaster position="top-center" richColors />
      {notiModel && (
        <NotificationModel setNotiModel={setNotiModel} data={state.user} />
      )}
      {passwordModel && (
        <PasswordModel setPasswordModel={setPasswordModel} data={state} />
      )}
      {close && (
        <Model
          setClose={setClose}
          deleteMode={true}
          courseId={state.user.id}
          deleteName={false}
          userMode={true}
        />
      )}
      {openModel && (
        <UserModel setOpenModel={setOpenModel} currentData={state.user} />
      )}
      {/* top */}
      <div className="relative gap-3 h-1/3 flex flex-col justify-center items-center my-5 ">
        <div
          onClick={() => setNotiModel(true)}
          className=" z-10 absolute top-3 left-6 gap-3 h-8 rounded-full cursor-pointer flex justify-center items-center hover:scale-125 transition-all"
        >
          <h1 className="text-white">ارسال رسالة</h1>
          <img src={sendImg} alt="" className="w-5 " />
        </div>
        <img
          className={`absolute max-w-none left-1/2 -translate-x-1/2   -bottom-4 ${
            window.innerWidth > 992 && "w-full"
          }   `}
          src={bg}
          alt=""
        />
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 -right-8  h-36  w-20 flex-col justify-around flex">
            <div
              onClick={() => {
                setClose(true);
              }}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all"
            >
              <img className="w-5 " src={userRemove} alt="" />
            </div>
            <div
              onClick={() => setOpenModel(true)}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all translate-x-3"
            >
              <img className="w-6 " src={userEdit} alt="" />
            </div>
            <div
              onClick={() => setPasswordModel(true)}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all"
            >
              <img className="w-6 " src={editPassword} alt="" />
            </div>
          </div>
          <div className="w-28 h-28 z-10 rounded-full overflow-hidden ">
            <img
              src={state ? state.user.profile_img : avatar}
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <h1 className="text-white z-10 text-2xl">{state && state.user.name}</h1>
        <p className="text-white  z-10 text-xs opacity-70 ">
          {state && state.user.email}
        </p>
      </div>
      {/* main */}

      <div className="flex justify-center items-center mt-9 flex-col gap-5 mx-5 ">
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
          <div className="home-screen p-5">
            <form
              className=" p-5 my-5 mb-8 border-b border-gray  "
              onSubmit={formHandler}
            >
              <div className={`flex justify-between gap-2 items-center `}>
                <div className={`${classRed} `}>
                  <FilterMenu
                    data={courses}
                    title={"الكورس"}
                    selected={menuSelected}
                    setAcadimcYearChoosed={setCourseChoosed}
                    notName={true}
                  />
                </div>

                <button
                  type="submit"
                  className="text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full mt-3"
                >
                  {isLoading ? "يتم الإنشاء" : "إضافة"}
                </button>
              </div>
            </form>

            <div className="overflow-x-auto box-shadow mt-5 ">
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
