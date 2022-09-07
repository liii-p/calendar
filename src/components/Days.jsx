import React from "react";

const Days = () => {
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const current = new Date();
  const days = `${getDaysInMonth(current.getFullYear(), current.getMonth())}`;

  console.log(getDaysInMonth(current.getFullYear(), current.getMonth()));

  return (
    <div>
      <p>{days}</p>
    </div>
  );
};

export default Days;
