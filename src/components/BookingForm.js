import { useFormik } from "formik";
import React, { useReducer, useEffect } from "react";
import { fetchAPI } from "../utils/api.js"

const validate = values => {
    const errors = {};
    if (!values.date) {
        errors.date = 'Required';
    } else if (values.date.length > 10) {
        errors.date = 'Must be proper date format: Date too long.';
    } else if (values.date) {
        const currDate = new Date().toLocaleDateString()
        const selectedDate = new Date(values.date).toLocaleDateString()
        if ((Date.parse(currDate) - Date.parse(selectedDate)) > 0) {
            errors.date = 'Please book a date later than today.'
        }
    }
    if (!(typeof(values.time) === "string")) {
        errors.time = 'Required';
    }
    if (!(typeof(values.guests) === "number")) {
        errors.guests = 'Please enter a valid number';
    } else if (values.guests < 1) {
        errors.guests = 'Minimum guest count: 1'
    } else if (values.guests > 10) {
        errors.guests = 'Maximum guest count: 10'
    } else if (!values.guests) {
        errors.guests = 'Required'
    }
    return errors;
};

const BookingForm = (props) => {
    const {submitHandler} = props;
    const initialTimes = []

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE':
                return action.payload;
            default:
                return state;
        }
    }

    const initializeTimes = (initialTimes) => {
        if (initialTimes) {
            initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
        }
        return initialTimes
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes);

    const formik = useFormik({
        initialValues: {
            date: "",
            time: availableTimes,
            guests: 0,
            occasion: "None"
        },
        validate,
        onSubmit: values => {
            submitHandler(values)
        }
    })

    useEffect(() => {
        if (!formik.values.date) {
            const date = new Date();
            const res = fetchAPI(date);
            dispatch({ type: "UPDATE", payload: res });
        } else {
            const date = new Date(formik.values.date);
            const res = fetchAPI(date);
            dispatch({ type: "UPDATE", payload: res });
        }

    }, [formik.values.date])
    return (
        <section className="form-wrapper">
            <h2>Book Now</h2>
            <form data-testid="form" onSubmit={formik.handleSubmit} style={{
                display: "grid", gap: "20px"
            }
            }>
                <label htmlFor="res-date">Choose date *</label>
                <input type="date" id="res-date" name="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    onBlur={formik.handleBlur}
                    onKeyDown={() => { return false }}
                />
                {formik.errors.date && formik.touched.date ? <div className="error">{formik.errors.date}</div> : null}
                <label htmlFor="res-time">Choose time *</label>
                <select data-testid="time-select" id="res-time"
                    name="time" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                >
                    <option hidden value={"default"}>Choose a time</option>
                    {availableTimes.map(time => <option data-testid="time-select-option" key={time} value={time}>{time}</option>)}
                </select>
                {formik.errors.time && formik.touched.time ? <div className="error">{formik.errors.time}</div> : null}
                <label htmlFor="guests">Number of guests *</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" 
                onChange={formik.handleChange} 
                value={formik.values.guests} 
                onBlur={formik.handleBlur}
                />
                {formik.errors.guests && formik.touched.guests ? <div className="error">{formik.errors.guests}</div> : null}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input 
                    type="submit" 
                    value="Make Your Reservation" 
                    disabled={(!formik.isValid || !formik.dirty)}
                    aria-label="Submit"
                />
            </form >
        </section>
    )
}

export default BookingForm;