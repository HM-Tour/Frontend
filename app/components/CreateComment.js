import axios from "axios";
import React,{useState,useContext} from "react";
import { AuthContext } from "../contexts/auth";


export default function CreateComment(){ 

    const {tokens}=useContext(AuthContext)
    

    
    const handleSubmit=async(e)=>{



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
            {/* <button
              class="px-3 py-2 text-sm text-blue-600 border border-blue-500 rounded">
              Cancel
            </button> */}
          </div>
        </form>
      </div>

    )
}