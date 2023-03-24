import React from "react";
import BookingForm from "../components/BookingForm";
import "../styles/Booking.css"
const BookingPage = ({ submitHandler }) => {

    return (
        <>
            <BookingForm  submitHandler={submitHandler}></BookingForm>
        </>
    )
}

export default BookingPage;