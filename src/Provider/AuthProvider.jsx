import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,updateProfile, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

// Create AuthContext
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   // Corrected Google Login function
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   // Github LogIN

   const githubLogIn=()=>{
    return signInWithPopup(auth,githubProvider)
   }
   //create register

   const register = async (email, password, name, photoUrl) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Update user's profile with name and photoUrl
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoUrl,
      });
  
      return userCredential;
    } catch (error) {
      throw new Error(error.message);
    }
  };

//email login
const LogIn=(email,password)=>{
 return signInWithEmailAndPassword(auth, email, password)
}

 // signOut

 const SignOut=()=>{
  return signOut(auth)
 }
   const authInfo = { 
    user, 
    googleLogin,githubLogIn,register, 
  LogIn , loading,SignOut,setUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

// Custom Hook for using AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
