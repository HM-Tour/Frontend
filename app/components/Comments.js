
"use client";
import React, { useEffect,useState } from "react";
import CreateComment from "./CreateComment";
import axios from "axios";

export default function Comments() {


  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:8000/api/comments/post/1");
      setData(result.data);
    };
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/comments/${id}`);
  }


  return (

    <>
   
   <CreateComment/>
   <section  class="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md" >
   
      <div class="max-w-3xl">
   
    {data.map((item) => (
     
    
 

    
        <div class="block p-6 rounded-lg shadow-lg bg-white m-4">
          <div key={item.id} class="md:flex md:flex-row">
            <div
              class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                class="rounded-full shadow-md"
                alt="woman avatar"
              />
            </div>
            <div class="md:ml-6">
              <p class="text-gray-500 font-light mb-6">
              {item.body}
              </p>
              <p class="font-semibold text-xl mb-2 text-gray-800">{item.author.name}</p>
              
            </div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
     
   
))}
 </div>
  </section>
  </>
  );
}
