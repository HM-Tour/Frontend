"use client";
import Comments from "@/app/components/Comments";
import Map from "@/app/components/Map";
import PostDetail from "@/app/components/PostDetail";
//import axios from "axios";




export default function PostDetails() {





  return (

    <>
    <PostDetail/>
    </>
 

  );
}

// export async function getStaticPaths(){
//   const response = await fetch(`http://127.0.0.1:8000/api/posts`)
//   const data = await response.json()

//   const allp = data.map(item => item.id)

//   const paths =  allp.map(post => ({ params: {id:post}}))

//   return{
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params}){
//   const response = await fetch(`http://127.0.0.1:8000/api/posts/${params.id}`)
//   const data = await response.json()

//   return {
//     props : {
//       data
//     }
//   }

// }
