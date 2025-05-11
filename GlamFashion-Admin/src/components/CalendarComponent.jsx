import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setValue} value={value} />
      <p className="text-sm mt-2 text-center">Selected date: {value.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
