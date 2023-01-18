"use client"

import {createContext,useEffect,useState} from 'react';
import axios from 'axios'


export const AuthContext=createContext();

export default function AuthWrapper({children}){


    const[globalState,setGlobalState]=useState({

        tokens:localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')):null,
        login
    })




   function login(userInfo){

        
        const url='http://127.0.0.1:8000/api/token/'
        try {
        axios.post(url,userInfo).then((res)=>{
            console.log('context file',res.data.access)
            setGlobalState({

                tokens:res.data,
                login
    
            })

            localStorage.setItem('data',JSON.stringify(res.data));
            
        })
        

        
    }catch(error) {
            console.error(error);
    }

    }
    

    

    
   


    return (


        <AuthContext.Provider value={globalState}>

            {children}

        </AuthContext.Provider>
    )



    }
        
    