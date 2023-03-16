import './styles/App.css';
import { Route, Routes, useNavigate } from "react-router-dom"
import React, { useState, useReducer, useEffect } from "react"
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

import { fetchAPI, submitAPI } from './utils/api';
function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guestCount: "",
    occasion: ""
  })

  const navigate = useNavigate();

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

  useEffect(() => {
    const date = new Date(formData.date);
    const res = fetchAPI(date);
    dispatch({ type: "UPDATE", payload: res });
  }, [formData.date])

  const submitForm = (e) => {
    const res = submitAPI(formData);
    if (res) {
      navigate("/confirmed-booking")
    }
    setFormData({
      date: "",
      time: "",
      guestCount: "",
      occasion: ""
    })
  }

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage formData={formData} setFormData={setFormData} timeDispatch={dispatch} availableTimes={availableTimes} submitForm={submitForm} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
