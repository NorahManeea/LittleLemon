import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurant from "../assets/Restaurant.svg";
import BookingForm from "../components/BookingForm";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <main className="booking">
      <h1>Booking</h1>
      <section>
       
      </section>
      <section>
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;
