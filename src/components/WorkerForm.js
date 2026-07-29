import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WorkerForm({ worker, onSubmit }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        profession: "",
        city: "",
        hourlyRate: "",
        phone: "",
        email: "",
        rating: "",
        experience: "",
        description: ""
    });

    useEffect(() => {

        if (worker) {

            setFormData({

                title: worker.title?.rendered || "",

                profession: worker.acf?.profession || "",

                city: worker.acf?.city || "",

                hourlyRate: worker.acf?.["hourly-rate"] || "",

                phone: worker.acf?.phone || "",

                email: worker.acf?.email || "",

                rating: worker.acf?.rating || "",

                experience: worker.acf?.experience || "",

                description: worker.acf?.description || ""

            });

        }

    }, [worker]);

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    }

    async function handleSubmit(e) {

        e.preventDefault();

        await onSubmit(formData);

        navigate("/admin");

    }

    return (

        <form
            className="worker-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                name="title"
                placeholder="Ime i prezime"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="profession"
                placeholder="Profesija"
                value={formData.profession}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="city"
                placeholder="Grad"
                value={formData.city}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="hourlyRate"
                placeholder="Cijena po satu"
                value={formData.hourlyRate}
                onChange={handleChange}
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="rating"
                placeholder="Ocjena"
                min="1"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
            />

            <input
                type="number"
                name="experience"
                placeholder="Godine iskustva"
                value={formData.experience}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Opis"
                rows="5"
                value={formData.description}
                onChange={handleChange}
            />

            <button type="submit">

                {worker ? "Spremi promjene" : "Dodaj majstora"}

            </button>

        </form>

    );

}

export default WorkerForm;
