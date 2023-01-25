"use client"

import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from "next/navigation";
export const AuthContext = createContext(1);

export default function AuthWrapper({ children }) {


    const [globalState, setGlobalState] = useState({
        tokens: typeof window !== 'undefined' ? (localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null) : null ,
        isAuthenticated: localStorage.getItem('data') ? true : false,
        login
    });
    const router = useRouter();
    

    function login(userInfo) {

        
        const url = 'http://52.87.231.115:8000/api/token/'
        try {
            axios.post(url, userInfo)
            .then((res) => {
                typeof window !== 'undefined' ? (localStorage.setItem('data', JSON.stringify(res.data))) : null;

                router.push("/")
                setGlobalState({
                    tokens: res.data,
                    isAuthenticated: true,
                    login
                });
                
                
            })
            .catch((error) => {
                alert('Wrong Username or Password');
                //console.error(error);
            });
        } catch (error) {
            alert('Wrong Username or Password');
            //console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}

