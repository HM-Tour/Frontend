"use client";
//import React, { useEffect, useState } from "react";
import moment from 'moment';
import Link from 'next/link';
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useSWR from 'swr';

export default function PostSummary({handleUpdate}) {

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
    //     const result = await axios.get(
    //       "http://127.0.0.1:8000/api/posts"
  
    //     );
  
    //     // console.log(result.data)
    //     setPostData(result.data);
    //     const id = result.data.id;
    //     //console.log(id)
    //   };
    //   const intervalId = setInterval(() => {
    //     fetchData();
    //   }, 5000);
    //   return () => clearInterval(intervalId);
    // }, []);


    const customLeftArrow = (
      <div className="absolute arrow-btn left-0 text-center py-2 cursor-pointer bg-sky-300 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    );

    const customRightArrow = (
      <div className="absolute arrow-btn right-0 text-center py-2 cursor-pointer bg-sky-300 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    );

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
      },
    };
    
  

    return (
      // Home Page after login
      <>
      <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">

      
      {data.map((post) => (
        <div key={post.title} >


<div className="mt-12 relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.image}')` }} />
    {/* <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" /> */}
    <div className="absolute rounded-lg bg-center w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.date).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.location}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
  
      </div>
    </div>

    <Link onClick={() => {
                handleUpdate(post);
              }} href={'/Post'}><span className="cursor-pointer absolute w-full h-full" /></Link>
  
  </div>



          </div>

        ))}
        </Carousel>
        </div>
      </>
    );
}