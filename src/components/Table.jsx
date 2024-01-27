import React from "react";
import Pagination from "./Pagination";
import avatar from "../img/avatar.png";
import UsersFilter from "./UsersFilter";
import { useNavigate } from "react-router-dom";

const Table = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div className=" rounded-lg overflow-auto mx-8 flex flex-col   med-outlet ">
      <div>
        <UsersFilter />
      </div>
      {type === "exams" ? (
        <table className="  w-full flex-grow   ">
          <thead className="bg-lightGray text-tableHead">
            <tr>
              <th className="text-tableHead font-normal text-x-[16px]">
                الإختبارات
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                عدد الطلاب
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                عدد الطلاب الممتحنين
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                متوسط الدرجات
              </th>
              <th className="text-tableHead font-normal text-x-[16px] ">
                التاريخ
              </th>
              <th className="text-tableHead font-normal text-x-[14px] ">
                السنة الدراسية
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="text-start">
                  <h1 className="font-medium  text-sm text-darkGray mb-1">
                    سيف الدين محمود
                  </h1>
                  <div className=" flex justify-start items-start gap-1">
                    <p className="text-[#2E6FF4] text-xs">لينك الإختبار</p>
                    <div
                      onClick={() => navigate("/#")}
                      className="text-[#2E6FF4] cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M6.66602 3.16666H3.99935C3.64573 3.16666 3.30659 3.30713 3.05654 3.55718C2.80649 3.80723 2.66602 4.14637 2.66602 4.49999V12.5C2.66602 12.8536 2.80649 13.1927 3.05654 13.4428C3.30659 13.6928 3.64573 13.8333 3.99935 13.8333H11.9993C12.353 13.8333 12.6921 13.6928 12.9422 13.4428C13.1922 13.1927 13.3327 12.8536 13.3327 12.5V9.83332M7.99935 8.49999L13.3327 3.16666M13.3327 3.16666V6.49999M13.3327 3.16666H9.99935"
                          stroke="#2E6FF4"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot className="text-center">
            <tr>
              <td colSpan={2}>
                <Pagination />
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <table className="  w-full   flex-grow  ">
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
              <th className="text-tableHead font-normal text-[14px] ">
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
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
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot className="text-center">
            <tr>
              <td colSpan={2}>
                <Pagination />
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Table;
