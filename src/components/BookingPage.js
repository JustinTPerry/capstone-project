import React from "react";
import BookingForm from "./BookingForm";
import "../styles/Booking.css"
const BookingPage = props => {
    const { formData, setFormData, timeDispatch, availableTimes, submitForm } = props
    return (
        <>
            <BookingForm formData={formData} setFormData={setFormData} timeDispatch={timeDispatch} availableTimes={availableTimes} submitForm={submitForm}></BookingForm>
        </>
    )
}

export default BookingPage;