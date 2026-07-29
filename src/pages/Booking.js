import { useState } from "react";
import { createBooking } from "../services/api";
import "../styles/Booking.css"

function Booking({ workerId }) {

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        message: ""
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setBooking((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await createBooking({
                worker: workerId,
                ...booking
            });

            alert("Rezervacija je uspješno spremljena!");

            setBooking({
                name: "",
                email: "",
                date: "",
                time: "",
                message: ""
            });

        } catch (error) {

            alert("Greška prilikom spremanja rezervacije.");

        }

    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Ime i prezime"
                value={booking.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={booking.email}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                required
            />

            <input
                type="time"
                name="time"
                value={booking.time}
                onChange={handleChange}
                required
            />

            <textarea
                name="message"
                placeholder="Poruka"
                value={booking.message}
                onChange={handleChange}
            />

            <button type="submit">

                Rezerviraj termin

            </button>

        </form>

    );

}

export default Booking;
