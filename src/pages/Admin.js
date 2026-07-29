import { useEffect, useState } from "react";
import {
    getWorkers,
    deleteWorker
} from "../services/api";
import { Link } from "react-router-dom";
import "../styles/Admin.css"

function Admin() {

    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadWorkers();

    }, []);

    async function loadWorkers() {

        try {

            const data = await getWorkers();

            setWorkers(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Jeste li sigurni da želite obrisati ovog majstora?"
        );

        if (!confirmDelete) return;

        try {

            await deleteWorker(id);

            setWorkers(workers.filter(worker => worker.id !== id));

        } catch (error) {

            alert("Greška prilikom brisanja.");

        }

    }

    if (loading) {

        return <h2>Učitavanje...</h2>;

    }

    return (

        <div className="admin-page">

            <h1>Administracija</h1>

            <Link
                to="/admin/add-worker"
                className="add-btn"
            >
                Dodaj novog majstora
            </Link>

            <table>

                <thead>

                    <tr>

                        <th>Ime</th>

                        <th>Zanimanje</th>

                        <th>Grad</th>

                        <th>Cijena</th>

                        <th>Akcije</th>

                    </tr>

                </thead>

                <tbody>

                    {workers.map(worker => (

                        <tr key={worker.id}>

                            <td>{worker.title.rendered}</td>

                            <td>{worker.acf?.profession}</td>

                            <td>{worker.acf?.city}</td>

                            <td>{worker.acf?.["hourly_rate"]} €/sat</td>

                            <td>

                                <Link
                                    to={`/admin/edit/${worker.id}`}
                                >
                                    Uredi
                                </Link>

                                {" | "}

                                <button
                                    onClick={() =>
                                        handleDelete(worker.id)
                                    }
                                >
                                    Obriši
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Admin;
