import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";


function Login() {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {

        e.preventDefault();

        if (email === "" || password === "") {
            alert("Ispuni sva polja!");
            return;
        }

        // Demo prijava
        if (email === "admin@majstor24.hr") {

            login({
                name: "Administrator",
                role: "admin"
            });

        } else {

            login({
                name: "Korisnik",
                role: "user"
            });

        }

        navigate("/");
    }

    return (

        <div className="login-page">

            <div className="login-card">

            

                <h1>Dobrodošli!</h1>

                <p>Prijavite se u svoj račun</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Lozinka"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Prijavi se
                    </button>

                </form>

                <p className="register-link">
                    Nemaš račun?{" "}
                    <Link to="/register">
                        Registriraj se
                    </Link>
                </p>

            </div>

        </div>

    );

}

export default Login;
