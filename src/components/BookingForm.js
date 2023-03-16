import React from "react";
const BookingForm = props => {
    const { formData, setFormData, timeDispatch, availableTimes, submitForm } = props

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return { ...prevFormData, [name]: value }
        })
        if (name === "date") {
            timeDispatch({ value })
        }
    }
    return (
        <section className="form-wrapper">
            <h2>Book Now</h2>
            <form onSubmit={submitForm} style={{
                display: "grid", gap: "20px"
            }
            }>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" onChange={handleChange} value={formData.date} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " name="time" onChange={handleChange} value={formData.time}>
                    {availableTimes.map(time => <option key={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guestCount" onChange={handleChange} value={formData.guestCount} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" onChange={handleChange} value={formData.occasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your Reservation" />
            </form >
        </section>
    )
}

export default BookingForm;