import avatar from "../img/avatar.png";
import Pagination from "../components/Pagination";
import UsersFilter from "../components/UsersFilter";
import { getAllUsers } from "../store/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const allUsers = useSelector((state) => state.users.users.users);
  console.log(allUsers);
  return (
    <div className="flex flex-col">
      <div>
        <UsersFilter />
      </div>

      <table className="overflow-auto sm:max-h-[602px] w-full mx-8 text-center rounded-xl boeder border-borderTable ">
        <thead className="bg-lightGray text-tableHead">
          <tr>
            <th className="text-tableHead font-normal text-x-[16px]">
              المستخدم
            </th>
            <th className="text-tableHead font-normal text-x-[16px]">
              رقم الطالب
            </th>
            <th className="text-tableHead font-normal text-x-[16px]">
              رقم ولي الأمر
            </th>
            <th className="text-tableHead font-normal text-x-[16px]">
              التقييم
            </th>
            <th className="text-tableHead font-normal text-[14px] lg:text-base">
              عدد الكورسات
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center items-center gap-4">
                <div className="w-11 rounded-full overflow-hidden">
                  <img src={avatar} alt="" />
                </div>
                <div className="text-right">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    سيف الدين محمود
                  </h1>
                  <p className="text-lightText text-[12px]">
                    seenaseif@gmail.com
                  </p>
                </div>
              </div>
            </td>
            <td>1234567890</td>
            <td>1234567890</td>
            <td>
              <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                <p className="text-xs text-lightText font-normal m-auto">65%</p>
              </div>
            </td>
            <td>1234567890</td>
            <td>
              <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                فتح
              </p>
            </td>
          </tr>
          {/* <tr>
          <td>
            <div className="flex justify-center items-center gap-4">
              <div className="w-11 rounded-full overflow-hidden">
                <img src={avatar} alt="" />
              </div>
              <div className="text-right">
                <h1 className="font-medium  text-sm text-darkGray ">
                  سيف الدين محمود
                </h1>
                <p className="text-lightText text-[12px]">
                  seenaseif@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>
            <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
              <p className="text-xs text-lightText font-normal m-auto">65%</p>
            </div>
          </td>
          <td>1234567890</td>
          <td>
            <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
              فتح
            </p>
          </td>
        </tr> */}
        </tbody>
        <tfoot className="text-center">
          <tr>
            <td colSpan={2}>
              <Pagination />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;
