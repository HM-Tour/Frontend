"use client";
import React, { useEffect, useState } from "react";
import moment from 'moment';
import Link from 'next/link';
import axios from "axios";
import PostDetails from "../Post/[id]/page"




export default function PostsCard(props) {

  // Data fetching part: 
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://127.0.0.1:8000/api/posts"

      );
      setPostData(result.data);
      const id = result.data.id;
      //console.log(id)
    };
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);



    return (
      // Home Page after login
      <>
      {postData.map((post) => (
        <div key={post.title} >
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
        
          <div className="lg:col-span-9 col-span-1 items-center justify-center"> */}
            <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mt-5">
              <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img
                  src={post.image}
                  alt=""
                  className="object-top absolute h-50 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
              </div>
              <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={`/post/`}>{post.title}</Link>
              </h1>

              <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                  <img
                    src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
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
                    className="h-6 w-6 inline mr-2 text-pink-500"
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
                    className="h-6 w-6 inline mr-2 text-pink-500"
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
                    className="h-6 w-6 inline mr-2 text-pink-500"
                    viewBox="0 0 48 48"
                  >
                    <circle
                      cx="29.218"
                      cy="29.218"
                      r="13.282"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M25.115 34.294a3.958 3.958 0 0 0 3.32 1.494h1.993a3.32 3.32 0 0 0 0-6.641h-2.159a3.32 3.32 0 1 1 0-6.641h1.993A3.565 3.565 0 0 1 33.582 24m-4.317-3.32v16.602m-12.77-12.59a4.468 4.468 0 0 1-1.413-3.277v-4.317a4.464 4.464 0 0 1 4.483-4.482a4.673 4.673 0 0 1 3.486 1.66M13.09 17.43h5.645m-5.645 3.32h5.645"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.02 31.774a13.282 13.282 0 1 1 15.754-15.753"
                    />
                  </svg>
                  <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                    {post.price}/D
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

              <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {post.description}
              </p>


              <div >
                <div class="pt-1">
                    <div class="text-sm mb-2 flex flex-start items-center">
                        <div>
                            <a href="#" class="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                <img class="h-8 w-8 rounded-full object-cover"
                                src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt="user" />
                            </a>
                        </div>
                        <p class="font-bold ml-2">
                            <a class="cursor-pointer">Joshua:</a>
                            <span class="text-gray-700 font-medium ml-1">
                                Good post
                            </span>
                        </p>
                    </div>
                </div>
                </div>

              <div className="text-center">
                <Link href="/Post/[id]" as={`/Post/${post.id}`}>

                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-5 py-0 cursor-pointer">
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