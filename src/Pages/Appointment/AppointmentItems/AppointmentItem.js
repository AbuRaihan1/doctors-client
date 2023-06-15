import React from "react";

const AppointmentItem = ({ appointmentItem, setTreatMent }) => {
  const { name, slots } = appointmentItem;

  return (
    <div className="my-10">
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-secondary font-bold">
            {name}
          </h2>
          <div className="text-center">
            <p className="font-bold">
              {slots.length > 0 ? slots[0] : "Try another day"}
            </p>
            <p className="my-2">{slots.length} spaces availabe</p>
            <div className="">
              <label
                htmlFor="booking_modal"
                className={"btn primary-button"}
                onClick={() => setTreatMent(appointmentItem)}
                disabled={!slots.length}
              >
                Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentItem;
