import { useEffect, useState } from "react";

export default function derailStat(props) {
  const [stat, getStat] = useState([{}]);
  console.log(props.data);

  return (
    <div className="h-[100%] w-[100%]">
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          co2
        </div>
        <div className="ml-5">{props.data.co2}</div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          습도
        </div>
        <div className="ml-5">{props.data.hum}</div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          밝기
        </div>
        <div className="ml-5">{props.data.lit}</div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%]  bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          PIR
        </div>
        <div className="ml-5">{props.data.pir}</div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-l from-white to-indigo-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-gradient-to-l from-gray-200 to-indigo-200 border border-gray-300 flex items-center justify-center">
          온도
        </div>
        <div className="ml-5">{props.data.tem}</div>
      </div>
      <div className="h-[16.5%] bg-gradient-to-r from-red-100 to-gray-100 flex items-center text-2xl">
        <div className="w-[20%] h-[100%]  bg-gradient-to-l from-gray-200 to-rose-200 border border-gray-300 flex items-center justify-center">
          Time
        </div>
        <div className="ml-5">{props.data.cTime}</div>
      </div>
    </div>
  );
}
