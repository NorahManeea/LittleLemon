import React from "react";

const BookingConfirmation = ({
  name,
  date,
  time,
  guests,
  occasion = false,
  table = false,
  request = false,
}) => {
  return (
    <main>
      <section
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <h1>Thank you for your booking, {name}!</h1>
        <p>
          We confirm your reservation for {date} at {time} for {guests}{" "}
          {guests === 1 ? "guest" : "guests"}.
        </p>
        
      </section>
    </main>
  );
};

export default BookingConfirmation;
