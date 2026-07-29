import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBooking } from "../services/api";
import "../styles/BookingCard.css"

function Booking() {
    const { workerId } = useParams();
    const navigate = useNavigate();

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setBooking((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await createBooking({
                worker: workerId,
                ...booking,
            });

            alert("Rezervacija je uspješno poslana!");

            navigate("/myrequests");
        } catch (err) {
            setError("Greška prilikom spremanja rezervacije.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="booking-page">
            <h1>Rezervacija termina</h1>

            {error && <p className="error">{error}</p>}

            <form className="booking-form" onSubmit={handleSubmit}>

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
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    value={booking.phone}
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
                    placeholder="Dodatna poruka..."
                    rows="5"
                    value={booking.message}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Spremanje..." : "Rezerviraj termin"}
                </button>

            </form>
        </div>
    );
}

export default Booking;