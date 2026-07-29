import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WorkerProfile from "./pages/WorkerProfile";
import Booking from "./pages/Booking";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import MyRequests from "./pages/MyRequests";
import WorkerDashboard from "./pages/WorkerDashboard";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/worker/:id"
                    element={<WorkerProfile />}
                />

                <Route
                    path="/booking/:workerId"
                    element={
                        <ProtectedRoute>
                            <Booking />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/chat"
                    element={
                        <ProtectedRoute>
                            <Chat />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/myrequests"
                    element={
                        <ProtectedRoute>
                            <MyRequests />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/worker-dashboard"
                    element={
                        <ProtectedRoute>
                            <WorkerDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />

            </Routes>
            
               <Footer />


        </>
    );
}

export default App;