"use client";
//import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import axios from "axios";
import useSWR from 'swr';


// const fetchDataCall = async () => {
//   let apiReturn = await axios
//     .get("http://127.0.0.1:8000/api/posts")
//     .then(async function(response) {
//       return response;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   return apiReturn;
// };

export default function PostsCard({ handleUpdate }) {
  // Data fetching part:
  //const [postData, setPostData] = useState([]);


  const url = "http://127.0.0.1:8000/api/posts"

  const fetcher = url => axios.get(url).then(res => res.data);
  console.log("fetcher",fetcher)

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  // useEffect(() => {

  //   const fetchData = async () => {
  //     const result = await axios.get("http://127.0.0.1:8000/api/posts")
  //     // .then(result => {       
  //     //   return result.data;
  //     // } )
  //     setPostData(result.data);
  //     const id = result.data.id;

  //   };
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    // Home Page after login
    <>
      {data.map((post) => (
        <div key={post.title}>
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
        
          <div className="lg:col-span-9 col-span-1 items-center justify-center"> */}
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mt-5">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
              <img
                src={post.image}
                alt=""
                className="object-center absolute h-80 w-full"
              />
            </div>
            <h1 className="capitalize transition duration-700 text-center mb-8 cursor-pointer hover:text-amber-400 text-3xl font-semibold">
              <Link
                onClick={() => {
                  handleUpdate(post);
                }}
                href={"/Post"}
              >
                {post.title}
              </Link>
            </h1>

            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <img
                  src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                  alt={post.owner}
                  className="h-8 w-8 align-middle rounded-full"
                />
                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                  {post.owner}
                </p>
              </div>

              <div className="font-medium text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="align-middle">
                  {moment(post.date).format("MMM DD, YYYY")}
                </span>
              </div>
            </div>

            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                  />
                </svg>

                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                  {post.location}
                </p>
              </div>

              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-amber-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23.59 3.475a5.1 5.1 0 0 0-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 0 0-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 0 1-.67.01a5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21c0 .9 1.04 1.2 2.24 1.65c2.1.7 3.84 1.58 3.84 3.64c0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32c1.3 0 2.17-.55 2.17-1.42c0-.87-.88-1.1-2.54-1.72c-1.76-.63-3.43-1.52-3.43-3.6c0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z"
                  />
                </svg>
                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                  {post.price} $/Day
                </p>
              </div>

              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"
                  />
                </svg>

                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                  {post.rate}
                </p>
              </div>
            </div>

            {/* <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {post.description}
              </p> */}

            <div
              className="text-center"
              onClick={() => {
                handleUpdate(post);
              }}
            >
              <Link href="/Post">
                <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-sky-400 text-lg font-medium rounded-full text-white px-5 py-1 cursor-pointer">
                  more Details
                </span>
              </Link>
            </div>
          </div>
        </div>

        // </div>
        // </div>
      ))}
    </>
  );
}