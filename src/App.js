import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

import { submitAPI } from "./utils/api";

import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import Menu from "./pages/Menu";
import Footer from './components/Footer';
import ConfirmedBooking from './pages/ConfirmedBooking';


import './styles/App.css';


function App() {
  const navigate = useNavigate();

  const submitForm = (values) => {
    const res = submitAPI(values);
    if (res) {
        navigate("/confirmed-booking")
    }
}
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home navigate={navigate}/>} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reservations" element={<BookingPage submitHandler={submitForm}/>} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
