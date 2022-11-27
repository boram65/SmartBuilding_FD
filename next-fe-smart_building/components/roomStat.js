import roomLogo from "../public/images/room-door.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function roomStat(props) {
  // props.data.map(e => {
  //   console.log(e);
  // });
  // console.log(props.data);

  return props.data.map((e, idx) => {
    return (
      <div
        className="flex m-1 hover:bg-violet-400"
        onClick={() => {
          roomCHOI();
        }}
        key={idx}
      >
        <div className="flex-row border border-indigo-200">
          <div className="flex justify-center text-xl mt-3 mx-8 text-gray-800">
            <div className="border rounded-xl border-indigo-500 bg-indigo-300 w-16 flex justify-center">
              방번호
            </div>
          </div>
          <div className="relative pt-2">
            <Image
              src={roomLogo}
              alt="stat"
              className="w-20 h-20 mx-5 mb-3"
            ></Image>
            <div className="absolute top-0 right-4 text-3xl">🟢</div>
          </div>
        </div>
      </div>
    );
  });
}
