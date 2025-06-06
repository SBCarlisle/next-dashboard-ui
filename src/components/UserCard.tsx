import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl flex-1 p-4 min-w-[130px] odd:bg-blue-200 even:bg-yellow-200">
      <div className="flex justify-between items-center">
        <div className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/2025
        </div>
        <Image
          src="/more.png"
          alt="elipsis"
          width={20}
          height={20}
          className="rounded-full cursor-pointer"
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <div className="text-gray-500 text-sm font-medium capitalize">
        {type}s
      </div>
      <h1></h1>
    </div>
  );
};

export default UserCard;
