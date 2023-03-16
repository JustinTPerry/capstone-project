import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import BookingForm from '../components/BookingForm';

test('BookingForm renders static text', () => {
    render(<BookingForm formData={{}} availableTimes={[]} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('BookingForm component can be submitted by the user', () => {
    const mockSubmit = jest.fn();
    render(<BookingForm formData={{}} availableTimes={[]} submitForm={mockSubmit} />);
    const submitButton = screen.getByText(/Make Your Reservation/);
    fireEvent.click(submitButton);
    expect(mockSubmit).toBeCalled();
})