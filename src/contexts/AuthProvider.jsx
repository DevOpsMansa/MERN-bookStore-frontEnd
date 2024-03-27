// import React, { createContext, useState, useEffect } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import app from '../firebase/firebase.config';

// export const AuthContext = createContext({
//     user: null,
//   loading: true,
//   createUser: () => {},
//   login: () => {},
//   logOut: () => {},
//   signUpWithGmail: () => {}
// });
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = async (email, password) => {
//         setLoading(true);
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error('Error creating user:', error);
//             throw error;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const signUpWithGmail = async () => {
//         setLoading(true);
//         try {
//             await signInWithPopup(auth, googleProvider);
//         } catch (error) {
//             console.error('Error signing up with Google:', error);
//             throw error;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             console.error('Error logging in:', error);
//             throw error;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logOut = async () => {
//         setLoading(true);
//         try {
//             localStorage.removeItem('genius-token');
//             await signOut(auth);
//         } catch (error) {
//             console.error('Error logging out:', error);
//             throw error;
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return unsubscribe;
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         login,
//         logOut,
//         signUpWithGmail
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
