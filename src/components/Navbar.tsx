import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-1 py-1 px-3 ring-[1.5px] ring-gray-300 bg-white rounded-lg shadow-sm">
        <Image src="/search.png" alt="" width={20} height={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent ml-2 p-1 outline-none "
        />
      </div>
      {/* ICONS AND USER */}
      <div className=" flex items-center justify-center gap-4">
        <div className="bg-white flex items-center justify-center gap-4 p-2 rounded-full shadow-md cursor-pointer">
          <Image src="/message.png" alt="Messages" width={25} height={25} />
        </div>
        <div className="relative bg-white flex items-center justify-center gap-4 p-2 rounded-full shadow-md cursor-pointer ml-2">
          <Image
            src="/announcement.png"
            alt="Announcements"
            width={25}
            height={25}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-purple-500 text-sm text-white">
            1
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 leading-3 font-medium text-sm">
            John Doe
          </span>
          <span className="text-gray-400 text-xs text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
