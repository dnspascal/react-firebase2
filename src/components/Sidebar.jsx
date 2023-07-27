export default function Sidebar() {
  return (
    <div className="flex basis-2/12 bg-gray-400 w-full h-full">
      <div className="flex flex-col p-2 mt-16">
        <p className="my-2 text-lg p-2">Dashboard</p>
        <p className="my-2 text-lg p-2">Staff</p>
        <p className="my-2 text-lg p-2">Billing</p>
        <p className="my-2 text-lg p-2">Logout</p>
      </div>
    </div>
  );
}
