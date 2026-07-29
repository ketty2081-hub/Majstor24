import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg"

function Navbar() {

    const { user, logout } = useContext(AuthContext);
    const {menuOpen, setMenuOpen} = useState(false);

    return (

        <nav className="navbar">

            <div className="logo">
             <Link to="/">
               <img src={logo} alt="Majstor24" className="logo-img" />
             </Link>
            </div>

            <div
               className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
               ☰
            </div>

              <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li>
                    <Link to="/">Početna</Link>
                </li>

                {!user && (

                    <>
                        <li>
                            <Link to="/login">
                            Prijava
                            </Link>
                        </li>

                        <li>
                            <Link to="/register">Registracija</Link>
                        </li>
                    </>

                )}

                {user && (

                    <>
                        <li>
                            <Link to="/profile">Profil</Link>
                        </li>

                        <li>
                            <Link to="/myrequests">
                                Moje rezervacije
                            </Link>
                        </li>

                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>

                        {user?.role === "admin" && (
                      <>
                      <li>
                          <Link to="/worker-dashboard">
                             Dashboard
                          </Link>
                     </li>

                    <li>
                           <Link to="/admin">
                            Admin
                           </Link>
                 </li>
                     </>
                        )}

                        <li>
                            <button
                                className="logout-btn"
                                onClick={logout}
                            >
                                Odjava
                            </button>
                        </li>

                    </>

                )}

            </ul>

        </nav>

    );

}

export default Navbar;