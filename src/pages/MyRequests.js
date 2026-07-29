import { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import BookingCard from "../components/BookingCard";

function MyRequests() {

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

    if (loading) {

        return <h2>Učitavanje rezervacija...</h2>;

    }

    return (

        <div className="my-requests">

            <h1>Moje rezervacije</h1>

            {

                bookings.length === 0 ? (

                    <p>Nema rezervacija.</p>

                ) : (

                    bookings.map((booking) => (

                        <BookingCard

                            key={booking.id}

                            booking={booking}

                        />

                    ))

                )

            }

        </div>

    );

}

export default MyRequests;