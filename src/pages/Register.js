import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css"

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Lozinke se ne podudaraju.");
    return;
  }

  const newUser = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  localStorage.setItem(
    "registeredUser",
    JSON.stringify(newUser)
  );

  alert("Registracija uspješna!");

  navigate("/login");
};

  return (
    <div className="register-container">
      <h1>Registracija</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Ime i prezime"
          value={formData.name}
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
          type="password"
          name="password"
          placeholder="Lozinka"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Potvrdi lozinku"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Registriraj se
        </button>

      </form>

      <p>
        Već imate račun? <Link to="/login">Prijavite se</Link>
      </p>
    </div>
  );
}

export default Register;
