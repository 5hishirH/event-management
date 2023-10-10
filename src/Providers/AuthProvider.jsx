import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [eventData, setEventData] = useState([]);
    
    const fetchEventData = () => {
        fetch('./socialEvents.json')
        .then(res => res.json())
        .then(data => setEventData(data));
    }

    useEffect(() => {
        fetchEventData()
    }, [])


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider)

    
  }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    
    const authInfo = { user, loading, eventData, createUser, signInUser, logOut, handleGoogleSignIn }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {unSubscribe()};
    }, [])
    
    return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
    )
}

export default AuthProvider