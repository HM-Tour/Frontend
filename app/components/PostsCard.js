"use client";
//import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import axios from "axios";

  return (
    // Home Page after login
    <>

          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
        
          <div className="lg:col-span-9 col-span-1 items-center justify-center"> */}
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mt-5">

              <Link href={`/post/`}>{post.title}</Link>
            </h1>

            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <img
                  src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"


                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                  {post.location}
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
                <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-orange-600 text-lg font-medium rounded-full text-white px-5 py-0 cursor-pointer">
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
in
