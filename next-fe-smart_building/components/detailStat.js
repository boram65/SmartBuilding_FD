import { useEffect, useState } from "react";

export default function derailStat() {
  const [stat, getStat] = useState([{}]);

  return (
    <div className="h-[100%] w-[100%]">
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          co2 :{" "}
        </div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          습도 :{" "}
        </div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          밝기 :{" "}
        </div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%]  bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          PIR :{" "}
        </div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          온도 :{" "}
        </div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%]  bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          Time :{" "}
        </div>
      </div>
    </div>
  );
}
