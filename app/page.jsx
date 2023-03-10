"use client";

import { Inter } from "@next/font/google";
import Vision from "./components/Vision";
import Articles from "./components/Articles";
import PostsCard from "./components/PostsCard";
import PostSummary from "./components/PostSummary";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const [data, setData] = useState(null);


  

  function handleUpdate(post) {
    setData(post);
    typeof window !== 'undefined' && post && localStorage.setItem("details", JSON.stringify(post));
  }



  
  return (
    <>
 
     <div className="container mx-auto px-10 mb-8">
        <PostSummary handleUpdate={handleUpdate}/>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          <div className="lg:col-span-8 col-span-1">
           

            <PostsCard handleUpdate={handleUpdate} />
          </div>

          <div className="lg:col-span-4 col-span-1">
            <div className="relative lg:sticky top-8 mt-5">
              <Vision />
              <Articles />
            </div>
          </div>

      
        </div>
       
      </div>
    </>
  );
}