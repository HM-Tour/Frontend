"use client";
import React,{useState,useContext} from "react";
import { AuthContext } from "../contexts/auth";


export default function CreateComment({postId}){ 


    const idt=JSON.parse(localStorage.getItem('details'))

    const {tokens}=useContext(AuthContext)
    

    
    const handleSubmit=async(e)=>{

      
      e.preventDefault()
      let body=e.target.comment.value
     

      const formData = new FormData();
      formData.append("body", body);
      formData.append("post", postId);
      formData.append("owner", 1);

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${tokens.access}`);

      

      const requestOptions = {
        method: "POST",
        body: formData,
        
        headers: headers,
      };

      await fetch(`http://127.0.0.1:8000/api/comments/post/${postId}`,requestOptions);


      const textArea = document.querySelector("textarea[name=comment]");
      textArea.value = "";
        
        
    }


    




    return(

        <div class="max-w-lg rounded-lg shadow-md shadow-lg ">
        <form onSubmit={handleSubmit} class="w-full p-4">
          <div class="mb-2">
            <label for="comment" class="text-lg text-gray-600">Add a comment</label>
            <textarea
              class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
              name="comment"
              placeholder=""></textarea>
          </div>
          <div>
            <button class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
              Comment
            </button>
           
          </div>
        </form>
      </div>

    )
}