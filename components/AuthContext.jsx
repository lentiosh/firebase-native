import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDYlf6ZGcQs8icXCLOzk4_JWvCwJILZosE",
  authDomain: "trip-planner-383f4.firebaseapp.com",
  projectId: "trip-planner-383f4",
  storageBucket: "trip-planner-383f4.appspot.com",
  messagingSenderId: "87868590631",
  appId: "1:87868590631:web:eadee437bc645ab32e9c02"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
