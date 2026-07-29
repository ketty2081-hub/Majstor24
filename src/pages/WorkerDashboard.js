import { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import "../styles/WorkerDashboard.css"

function WorkerDashboard() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadBookings() {

            try {

                const data = await getBookings();

                setBookings(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadBookings();

    }, []);

    function approveBooking(id) {

        alert(`Rezervacija ${id} potvrđena.`);

    }

    function rejectBooking(id) {

        alert(`Rezervacija ${id} odbijena.`);

    }

    if (loading) {

        return <h2>Učitavanje...</h2>;

    }

    return (

        <div className="dashboard">

            <h1>Dashboard majstora</h1>

            {

                bookings.length === 0 ? (

                    <p>Nema rezervacija.</p>

                ) : (

                    bookings.map((booking) => (

                        <div
                            className="dashboard-card"
                            key={booking.id}
                        >

                            <h3>

                                {booking.acf?.name}

                            </h3>

                            <p>

                                <strong>Datum:</strong>

                                {booking.acf?.date}

                            </p>

                            <p>

                                <strong>Vrijeme:</strong>

                                {booking.acf?.time}

                            </p>

                            <p>

                                <strong>Email:</strong>

                                {booking.acf?.email}

                            </p>

                            <p>

                                <strong>Poruka:</strong>

                                {booking.acf?.message}

                            </p>

                            <button
                                onClick={() =>
                                    approveBooking(booking.id)
                                }
                            >

                                Potvrdi

                            </button>

                            <button
                                onClick={() =>
                                    rejectBooking(booking.id)
                                }
                            >

                                Odbij

                            </button>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default WorkerDashboard;