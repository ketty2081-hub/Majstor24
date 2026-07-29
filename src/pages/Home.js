import { useEffect, useState } from "react";
import { getWorkers } from "../services/api";
import WorkerCard from "../components/WorkerCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import "../styles/Home.css";

function Home() {
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        async function loadWorkers() {
            try {
                const data = await getWorkers();
                setWorkers(data);
            } catch (error) {
                setError("Greška kod dohvaćanja majstora.");
            } finally {
                setLoading(false);
            }
        }

        loadWorkers();
    }, []);

    const filteredWorkers = workers.filter((worker) => {

        const name = worker.title.rendered.toLowerCase();

        const profession =
            worker.acf?.profession?.toLowerCase() || "";

        const workerCity =
            worker.acf?.city || "";

        const workerRating =
            Number(worker.acf?.rating || 0);

        return (
            (name.includes(search.toLowerCase()) ||
                profession.includes(search.toLowerCase())) &&

            (city === "" || workerCity === city) &&

            (rating === "" || workerRating >= Number(rating))
        );
    });

    if (loading) {
        return <h2>Učitavanje...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>

            <section className="hero">

                <div className="hero-content">

                    <h1>Pronađite pouzdanog majstora</h1>

                    <p>
                        Rezervirajte električare, vodoinstalatere,
                        keramičare, soboslikare i druge stručnjake
                        u samo nekoliko klikova.
                    </p>

                    <a href="#workers" className="hero-btn">
                        Pronađi majstora
                    </a>

                </div>

            </section>

            <section id="workers" className="home">

                <h2>Pronađi majstora</h2>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <FilterBar
                    city={city}
                    setCity={setCity}
                    rating={rating}
                    setRating={setRating}
                />

                <div className="workers-grid">

                    {filteredWorkers.length > 0 ? (

                        filteredWorkers.map((worker) => (

                            <WorkerCard
                                key={worker.id}
                                worker={worker}
                            />

                        ))

                    ) : (

                        <p>Nema pronađenih majstora.</p>

                    )}

                </div>

            </section>

            <section className="about">

                <h2>Zašto odabrati Majstor24?</h2>

                <div className="about-grid">

                    <div className="about-card">
                        <h3>🛠️ Provjereni majstori</h3>
                        <p>Svi majstori imaju ispunjene profile i ocjene korisnika.</p>
                    </div>

                    <div className="about-card">
                        <h3>⚡ Brza rezervacija</h3>
                        <p>Rezervirajte termin u samo nekoliko klikova.</p>
                    </div>

                    <div className="about-card">
                        <h3>⭐ Pouzdane ocjene</h3>
                        <p>Odaberite najbolje ocijenjene majstore u svom gradu.</p>
                    </div>

                </div>

            </section>

        </>
    );
}

export default Home;