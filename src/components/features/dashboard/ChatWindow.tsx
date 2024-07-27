export default function ChatWindow({ id }) {
  return (
    <div className="flex top-0 w-full bg-white shadow-lg items-center justify-between left-30 p-2 ">
      <span className="font-bold capitalize text-2xl">{id}</span>
      <div className="flex">
        <input type="search" className="mr-2 bg-gray-300 rounded-sm" />
        <div className="bg-gray-300 rounded-sm p-2">Dashboard</div>
      </div>
    </div>
  );
}
