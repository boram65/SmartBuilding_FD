import RoomStat from "../components/roomStat";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="bg-gradient-to-t from-violet-300 to-indigo-300 h-[100vh] w-[40vw]"></div>
      <div className="bg-gradient-to-b from-violet-300 bg-indigo-300 h-[100vh] w-[60vw]">
        <RoomStat />
      </div>
    </div>
  );
}
