import React from "react";

const AppointmentItem = ({ appointmentItem }) => {
  const { name, slots } = appointmentItem;
  return (
    <div className="my-10">
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-secondary font-bold">
            {name}
          </h2>
          <div className="text-center">
            <p className="mb-4 font-bold">
              {" "}
              {slots.length > 0 ? slots[0] : "Try another day"}
            </p>
            <div className="">
              <button className="btn primary-button">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItem;
