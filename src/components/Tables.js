/* eslint-disable eqeqeq */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCourses, getAllUsers } from "../store/usersSlice";
import dateFormat from "dateformat";
import avatar from "../img/avatar.png";
import link from "../img/link.png";
import { BeatLoader } from "react-spinners";

// last purches
export const UseHomeTable = ({ searchText }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const filterdData =
    state && searchText.length >= 1
      ? state.filter((user) => user.name.includes(searchText.toLowerCase()))
      : state;
  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الطالب</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            السنة الدراسية
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            اسم الكورس
          </th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          filterdData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>100</td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    اسم الكورس
                  </p>
                </td>
              </tr>
            );
          })}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && filterdData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

//courses
export const UseCoursesTable = ({ searchText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);
  const state = useSelector((state) => state.users.courses.courses);
  const isLoading = useSelector((state) => state.users.isLoading);

  const filterdData =
    state && searchText.length >= 1
      ? state.filter((course) => course.name.includes(searchText.toLowerCase()))
      : state;

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الكورسات</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            عدد الطلاب
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            التاريخ
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            السنة
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          state &&
          filterdData.map((course) => {
            return (
              <tr className="pl-3" key={course.id}>
                <td className="min-w-60">
                  <div className="text-right gap-4">
                    <h1 className="font-medium  text-base  text-darkGray ">
                      {course.name}
                    </h1>
                    <div className="flex justify-start items-center gap-2 cursor-pointer">
                      <p className="text-darckBlue text-[12px]">لينك الكورس</p>
                      <img className="w-3 " src={link} alt="" />
                    </div>
                  </div>
                </td>
                <td className=" ">10</td>
                <td>{course.price}</td>
                <td>{dateFormat(course.created_at, "dd - mm - yyyy")}</td>
                <td>
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      course.academic_year == "1"
                        ? "bg-[#F4CB3C]"
                        : course.academic_year == "2"
                        ? "bg-[#2E6FF4] "
                        : course.academic_year == "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${course.academic_year}ث`}
                  </p>
                </td>
                <td>
                  <p className=" m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer">
                    فتح
                  </p>
                </td>
              </tr>
            );
          })}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && filterdData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

//users
export const UseUsersTable = ({ searchText }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const filterdData =
    state && searchText.length >= 1
      ? state.filter((user) => user.name.includes(searchText.toLowerCase()))
      : state;
  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الطالب</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            السنة الدراسية
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            اسم الكورس
          </th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          filterdData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>100</td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    اسم الكورس
                  </p>
                </td>
              </tr>
            );
          })}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && filterdData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
