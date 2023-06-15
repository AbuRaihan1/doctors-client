import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentItem from "./AppointmentItem";

const AppointmentItems = ({ selectedDay }) => {
  const [appointmentItems, setAppointmentItems] = useState([]);
  const [treatMent, setTreatMent] = useState({});
  useEffect(() => {
    fetch("doctorsService.json")
      .then((res) => res.json())
      .then((data) => setAppointmentItems(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {appointmentItems.map((appointmentItem, idx) => (
        <AppointmentItem
          key={idx}
          appointmentItem={appointmentItem}
          setTreatMent={setTreatMent}
        />
      ))}
      <AppointmentModal
        setTreatMent={setTreatMent}
        selectedDay={selectedDay}
        treatMent={treatMent}
      />
    </div>
  );
};

export default AppointmentItems;
