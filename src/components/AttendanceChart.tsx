"use client";
import Image from "next/image";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 106,
    absent: 5,
  },
  {
    name: "Tue",
    present: 109,
    absent: 2,
  },
  {
    name: "Wed",
    present: 107,
    absent: 4,
  },
  {
    name: "Thu",
    present: 108,
    absent: 3,
  },
  {
    name: "Fri",
    present: 103,
    absent: 8,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4 mt-4 shadow-md">
      <div className="">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
      </div>
      <ResponsiveContainer width="90%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={25}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="absent" fill="#838383" />
          <Bar dataKey="present" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
