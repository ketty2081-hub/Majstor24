import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    function login(userData) {

        setUser(userData);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

    }

    function logout() {

        setUser(null);

        localStorage.removeItem("user");

    }

    function updateUser(newData) {

        setUser(newData);

        localStorage.setItem(
            "user",
            JSON.stringify(newData)
        );

    }

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                logout,

                updateUser

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;