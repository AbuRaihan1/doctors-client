import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentItem from "./AppointmentItem";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const AppointmentItems = ({ selectedDay }) => {
  // const [appointmentItems, setAppointmentItems] = useState([]);
  const [treatMent, setTreatMent] = useState({});

  const date = format(selectedDay, "PP");
  const { data: appointmentItems = [], refetch } = useQuery({
    queryKey: ["doctorsService", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/doctorsService?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/doctorsService")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentItems(data));
  // }, []);
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
        refetch = {refetch}
      />
    </div>
  );
};

export default AppointmentItems;
