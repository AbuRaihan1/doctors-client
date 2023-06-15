import { format } from "date-fns";
import React from "react";
import doctorChair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDay, setSelectedDay }) => {
  let footer = <p>Please pick a day.</p>;
  if (selectedDay) {
    footer = <p>You have selected day : {format(selectedDay, "PP")}.</p>;
  }
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={doctorChair}
            className="md:w-1/2 w-full rounded-lg shadow-2xl"
            alt=""
          />
          <div className="shadow-2xl rounded-md">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </div>
        </div>
      </div>
      <div className="text-center my-12">
        <aside className="text-secondary font-bold text-xl">{footer}</aside>
      </div>
    </>
  );
};

export default AppointmentBanner;
