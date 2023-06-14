import React from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentItem = ({ appointmentItem, setTreatMent }) => {
  const { name, slots } = appointmentItem;
  const modalId = document.getElementById("booking-modal");

  const onClickTwoFunctions = () => {
    setTreatMent(appointmentItem);
    modalId.showModal();
  };
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
                htmlFor="booking-modal"
                className="btn primary-button"
                onClick={onClickTwoFunctions}
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
