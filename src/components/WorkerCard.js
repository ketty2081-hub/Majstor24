import { Link } from "react-router-dom";
import Rating from "./Rating";
import "../styles/WorkerCard.css";

function WorkerCard({ worker }) {

    const acf = worker.acf || {};

    return (

        <div className="worker-card">

            

            <h2>{worker.title.rendered}</h2>

            <p>
                <strong>Profesija:</strong> {acf.profession}
            </p>

            <p>
                <strong>Grad:</strong> {acf.city}
            </p>

            <p>
                <strong>Cijena:</strong> {acf.hourly_rate} €/sat
            </p>

            <p>
                <strong>Iskustvo:</strong> {acf.experience} godina
            </p>

            <Rating rating={acf.rating} />

            <Link
                to={`/worker/${worker.id}`}
                className="details-btn"
            >
                Pogledaj profil
            </Link>

        </div>

    );

}

export default WorkerCard