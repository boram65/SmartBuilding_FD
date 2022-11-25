import { useEffect, useState } from "react";

export default function derailStat() {
  const [stat, getStat] = useState([{}]);

  return (
    <div className="h-[100%] w-[100%] ">
      <div className="h-[20%] bg-green-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-slate-300 flex items-center justify-center">
          co2 :{" "}
        </div>
      </div>
      <div className="h-[20%] bg-blue-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-slate-100 flex items-center justify-center">
          습도 :{" "}
        </div>
      </div>
      <div className="h-[20%] bg-green-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-slate-300 flex items-center justify-center">
          밝기 :{" "}
        </div>
      </div>
      <div className="h-[20%] bg-blue-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-slate-100 flex items-center justify-center">
          PIR :{" "}
        </div>
      </div>
      <div className="h-[20%] bg-green-200 flex items-center text-2xl">
        <div className="w-[20%] h-[100%] bg-slate-300 flex items-center justify-center">
          온도 :{" "}
        </div>
      </div>
    </div>
  );
}
