import RoomStat from "../components/roomStat";
import DetailStat from "../components/detailStat";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-full">
      <div className="bg-gradient-to-t from-violet-300 to-indigo-300 h-[100vh] w-[40vw]">
        <div className="h-[50vh] bg-red-200"></div>
        <div className="h-[50vh] bg-blue-200">
          <DetailStat />
        </div>
      </div>
      <div className="bg-gradient-to-b from-violet-300 bg-indigo-300  h-[100vh] w-[60vw] flex flex-wrap justify-start overflow-auto">
        <RoomStat />
      </div>
    </div>
  );
}
