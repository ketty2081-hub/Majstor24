import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getWorker } from "../services/api";
import Rating from "../components/Rating";
import "../styles/WorkerProfile.css";

function WorkerProfile() {

    const { id } = useParams();

    const [worker, setWorker] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadWorker() {

            try {

                const data = await getWorker(id);
                setWorker(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadWorker();

    }, [id]);

    if (loading) return <h2>Učitavanje...</h2>;

    if (!worker) return <h2>Majstor nije pronađen.</h2>;

    const acf = worker.acf || {};

    return (

        <div className="worker-profile">

            

            <h1>{worker.title.rendered}</h1>

            <Rating rating={acf.rating} />

            <p><strong>Profesija:</strong> {acf.profession}</p>

            <p><strong>Grad:</strong> {acf.city}</p>

            <p><strong>Cijena:</strong> {acf.hourly_rate} €/sat</p>

            <p><strong>Iskustvo:</strong> {acf.experience} godina</p>

            <p><strong>Telefon:</strong> {acf.phone}</p>

            <p><strong>Email:</strong> {acf.email}</p>

            <p>{acf.description}</p>

            <Link
                to={`/booking/${worker.id}`}
                className="booking-btn"
            >
                Rezerviraj termin
            </Link>

        </div>

    );

}

export default WorkerProfile;