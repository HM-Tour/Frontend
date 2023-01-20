"use client";
import React, { useContext, useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import axios from "axios";
import { AuthContext } from "../contexts/auth";

export default function Comments({postId}) {



  const {tokens}=useContext(AuthContext)
  const [data, setData] = useState([]);

    
  useEffect(() => {

    const fetchData = async () => {

      const result = await axios.get(

        `http://127.0.0.1:8000/api/comments/post/${postId}`

      );
      setData(result.data);
    };
    const intervalId = setInterval(() => {

      fetchData();

    }, 5000);

    return () => clearInterval(intervalId);

  }, []);




  

  const handleDelete = async (id) => {



    const headers = new Headers();
    headers.append("Authorization", `Bearer ${tokens.access}`);
    
    const requestOptions = {
        method: "DELETE",
        headers: headers,
      };

    await fetch(`http://127.0.0.1:8000/api/comments/${id}`,requestOptions);

  };

  return (
    <>
     

      <div class="antialiased mx-auto max-w-screen-sm">
        <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

        {data.map((item) => (



          <div key={item.id} class="space-y-4 ">
            <div class="flex">
              <div class="flex-shrink-0 mr-3">
                <img
                  class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong>{item.owner_username}</strong>{" "}
                <span class="text-xs text-gray-400">{item.created_at}</span>
                <p class="text-sm">{item.body}</p>
                <button
                  onClick={()=>handleDelete(item.id)}
                  type="button"
                  title="Start buying"
                  class="w-full py-3 px-6 text-center rounded-full transition bg-blue-400 hover:bg-blue-200 active:bg-blue-400 focus:bg-yellow-300 sm:w-max"
                >
                  <span class="block text-black font-semibold text-sm">
                    Delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid  place-items-center">
      <CreateComment  postId={postId}/>
      </div>
      
    </>
  );
}
