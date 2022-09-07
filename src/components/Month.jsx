// header (month)

const Month = () => {
  const current = new Date();

  const monthName = current.toLocaleString("default", { month: "long" });

  return (
    <div>
      <h1>{monthName}</h1>
    </div>
  );
};

export default Month;

// clickable dates
