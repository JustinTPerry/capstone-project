import { fireEvent, render, screen, act } from "@testing-library/react";
import React from "react";
import BookingForm from '../components/BookingForm';

test('BookingForm renders static text', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe("BookingForm", () => {
    test('BookingForm component cannot be submitted when empty', () => {
        const mockSubmit = jest.fn(e => e.preventDefault());
        render(<BookingForm submitHandler={mockSubmit} />);
        const submitButton = screen.getByText(/Make Your Reservation/);
        expect(submitButton).toHaveProperty('disabled');
    });
    describe("date", ()=> {
        test('BookingForm component cannot be submitted with empty date', async () => {
            const time = "17:00";
            const guests = 1;
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const timeSelect = screen.getByLabelText(/Choose time */);
            const guestSelect = screen.getByLabelText(/Number of guests */);
            await act(() => {
                fireEvent.change(timeSelect, {target: {value: time}});
                fireEvent.change(guestSelect, {target: {value: guests}});
            })
            expect(screen.getByRole('option', {name: time}).selected).toBe(true);
        
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
    
        });

        test('BookingForm component displays date errors and will not submit', async () => {
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const dateSelect = screen.getByLabelText(/Choose date */);
            await act(() => {
                fireEvent.blur(dateSelect);
            })
            expect(screen.getByText(/Required/)).toBeInTheDocument();
            await act(() => {
                fireEvent.change(dateSelect, {target: {value: "20231-04-03"}});
            })
            expect(screen.getByText(/Must be proper date format: Date too long./)).toBeInTheDocument();
            await act(() => {
                fireEvent.change(dateSelect, {target: {value: "2023-03-01"}});
            })
            expect(screen.getByText(/Please book a date later than today./)).toBeInTheDocument();
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
        });
    })
    describe("time", () => {
        test('BookingForm component cannot be submitted with empty time', async () => {
            const date = "2023-12-31";
            const time = "17:00";
            const guests = 1;
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const dateSelect = screen.getByLabelText(/Choose date */);
            const guestSelect = screen.getByLabelText(/Number of guests */);
            await act(() => {
                fireEvent.change(dateSelect, {target: {value: date}});
                fireEvent.change(guestSelect, {target: {value: guests}});
            })
            expect(screen.getByRole('option', {name: time}).selected).toBe(false);
        
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
        });

        test('BookingForm component displays time errors and will not submit', async () => {
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const timeSelect = screen.getByLabelText(/Choose time */);
            await act(() => {
                fireEvent.blur(timeSelect);
            })
            expect(screen.getByText(/Required/)).toBeInTheDocument();
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
        });
    })
    
    describe("guests", () => {
        test('BookingForm component cannot be submitted with empty guest', async () => {
            const date = "2023-12-31";
            const time = "17:00";
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const dateSelect = screen.getByLabelText(/Choose date */);
            const timeSelect = screen.getByLabelText(/Choose time */);
            await act(() => {
                fireEvent.change(dateSelect, {target: {value: date}});
                fireEvent.change(timeSelect, {target: {value: time}});
            })
            expect(screen.getByRole('option', {name: time}).selected).toBe(true);
        
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
        });

        test('BookingForm component displays guest errors and will not submit', async () => {
            const mockSubmit = jest.fn();
            render(<BookingForm submitHandler={mockSubmit} />);
            const guestSelect = screen.getByLabelText(/Number of guests */);
            await act(() => {
                fireEvent.blur(guestSelect);
            })
            expect(screen.getByText(/Minimum guest count: 1/)).toBeInTheDocument();
            await act(() => {
                fireEvent.change(guestSelect, {target: {value: ""}});
            })
            expect(screen.getByText(/Please enter a valid number/)).toBeInTheDocument();
            await act(() => {
                fireEvent.change(guestSelect, {target: {value: 11}});
            })
            expect(screen.getByText(/Maximum guest count: 10/)).toBeInTheDocument();
            const submitButton = screen.getByText(/Make Your Reservation/);
            expect(submitButton).toBeDisabled();
        });
    })
    

    test('BookingForm component can be submitted with required fields', async () => {
        const date = "2023-12-31";
        const time = "17:00";
        const guests = 1;
        const mockSubmit = jest.fn();
        render(<BookingForm submitHandler={mockSubmit} />);
        const dateSelect = screen.getByLabelText(/Choose date */);
        const timeSelect = screen.getByLabelText(/Choose time */);
        const guestSelect = screen.getByLabelText(/Number of guests */);
        await act(() => {
            fireEvent.change(dateSelect, {target: {value: date}});
            fireEvent.change(timeSelect, {target: {value: time}});
            fireEvent.change(guestSelect, {target: {value: guests}});
        })
        expect(screen.getByRole('option', {name: time}).selected).toBe(true);
    
        const submitButton = screen.getByText(/Make Your Reservation/);
        expect(submitButton).not.toBeDisabled();
        await act(() => {
            fireEvent.click(submitButton);
        })
        
        expect(mockSubmit).toHaveBeenCalledWith({date, time, guests, occasion: "None"});
    });
})

