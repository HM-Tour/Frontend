"use client";

import React,{useEffect,useState}from "react";
import axios from "axios";

// const KEY='AIzaSyDIhbyjL0U1MFdSxtL6xY9Ie_tiSMt07ns'

export default function Map({location}){

   const [Map,setMap]=useState('')

   
   
   useEffect(() => {
    handleData();
  },[]);
   
   
   async function handleData () {

    try{
        const response = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=${location},CA&zoom=14&size=400x400&key=${KEY}`)

        setMap(response.request.responseURL)
        

    }

    catch (error) {
        console.log(error);
        // handle the error here
      }

        

        
    }


   
    
    return (

                <>
                {Map && <img src={Map}/>}
                
                </>)
}