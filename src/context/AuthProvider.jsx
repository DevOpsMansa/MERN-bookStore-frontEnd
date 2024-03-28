import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

// Create a context for managing authentication state
export const AuthContext = createContext();

// Get the authentication instance from Firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
    // State to store user information and loading state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to sign up with Google
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Function to login with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Function to log out
    const logOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    // Effect to listen for changes in authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup function to unsubscribe from the auth state listener
        return () => {
            return unsubscribe();
        }
    }, [])

    // Object containing authentication-related information and functions
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signUpWithGmail
    }

    // Provide the authInfo object to components through the context provider
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
