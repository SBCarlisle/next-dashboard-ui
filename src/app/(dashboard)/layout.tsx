import Link from "next/link";
import Image from "next/image";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex bg-green-100">
      {/* left */}
      <div className="w-[14%] max-w-[200px] md:w-[10%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex flex-col items-center justify-start gap-2 "
        >
          <div className="flex items-center bg-slate-50 p-2 w-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="inline p-2"
            />
            <span className="hidden lg:inline-block xl:inline-block text-center font-bold">
              School Management
            </span>
          </div>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[90%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll-y">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
