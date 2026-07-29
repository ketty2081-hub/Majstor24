import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Profile.css"

function Profile() {

    const { user, updateUser } = useContext(AuthContext);

    const [formData, setFormData] = useState({

        name: user?.name || "",

        email: user?.email || "",

        phone: user?.phone || ""

    });

    const [message, setMessage] = useState("");

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    }

    function handleSubmit(e) {

        e.preventDefault();

        updateUser(formData);

        setMessage("Profil je uspješno spremljen.");

    }

    return (

        <div className="profile-page">

            <h1>Moj profil</h1>

            {message && <p className="success">{message}</p>}

            <form
                className="profile-form"
                onSubmit={handleSubmit}
            >

                <label>Ime i prezime</label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Telefon</label>

                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <button type="submit">

                    Spremi promjene

                </button>

            </form>

        </div>

    );

}

export default Profile;