/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children, setShowSignInButton }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:4000/api/user/login", { email, password });
            if (response.data.success) {
                setUser(response.data.user);
                setShowSignInButton(false); // Hide the sign-in button
                console.log('Login success:', response.data.user); // Debug log
                return true;
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const signup = async (username, email, password) => {
        try {
            const response = await axios.post("http://localhost:4000/api/user/register", { username, email, password });
            if (response.data.success) {
                setUser(response.data.user);
                setShowSignInButton(false); // Hide the sign-in button
                console.log('Signup success:', response.data.user); // Debug log
                return true;
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Signup error:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setShowSignInButton(true); // Show the sign-in button on logout
        console.log('User logged out'); // Debug log
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);