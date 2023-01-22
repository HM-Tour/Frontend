"use client";
import PostDetail from "../components/PostDetail";





export default function PostDetails() {


   


  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="col-span-1 lg:col-start-2 lg:col-span-4 ">
            <PostDetail />
          </div>
        </div>
      </div>
    </>
  );
}

