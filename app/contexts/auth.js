"use client"

import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export default function AuthWrapper({ children }) {


    const [globalState, setGlobalState] = useState({
        tokens: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null,
        isAuthenticated: false,
        login
    });
    const router = useRouter();
    

    function login(userInfo) {

        
        const url = 'http://127.0.0.1:8000/api/token/'
        try {
            axios.post(url, userInfo)
            .then((res) => {
                router.push("/")
                setGlobalState({
                    tokens: res.data,
                    isAuthenticated: true,
                    login
                });
                localStorage.setItem('data', JSON.stringify(res.data));
            })
            .catch((error) => {
                alert('Wrong Username or Password');
                console.error(error);
            });
        } catch (error) {
            alert('Wrong Username or Password');
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}

