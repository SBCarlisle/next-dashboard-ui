"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "School assembly and orientation for new students.",
    start: new Date(2023, 9, 1, 9, 0), // Oct 1, 2023, 09:00 AM
    end: new Date(2023, 9, 2, 17, 0), // Oct 2, 2023, 05:00 PM
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Parent-teacher conference and progress discussion.",
    start: new Date(2023, 9, 5, 13, 30), // Oct 5, 2023, 01:30 PM
    end: new Date(2023, 9, 6, 15, 0), // Oct 6, 2023, 03:00 PM
    startTime: "01:30 PM",
    endTime: "03:00 PM",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <Image
            src="/moreDark.png"
            alt="More Events"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        {events.map((event) => (
          <div key={event.id} className="p-2 border rounded-md bg-gray-100">
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-md">{event.description}</p>
            <p className="text-sm text-gray-700">
              {event.start.toLocaleDateString()} {event.startTime} -{" "}
              {event.end.toLocaleDateString()} {event.endTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
