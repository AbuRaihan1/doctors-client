import React, { useEffect, useState } from "react";
import AppointmentItem from "./AppointmentItem";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentItems = ({ selectedDay, setSelectedDay }) => {
  const [appointmentItems, setAppointmentItems] = useState([]);
  const [treatMent, setTreatMent] = useState(null);
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
      <AppointmentModal treatMent={treatMent} />
    </div>
  );
};

export default AppointmentItems;
