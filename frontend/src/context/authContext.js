import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Pages/Login/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return (
            unsub()
        )

    }, [])
    console.log(currentUser);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}