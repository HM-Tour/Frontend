"use client";
import Comments from "./Comments";
import Map from "./Map";
import React from "react";
import moment from "moment";
import Link from "next/link";

export default function PostDetail() {
  const details = JSON.parse(localStorage.getItem("details"));

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-10">
          <img
            src={details.image}
            alt=""
            className="object-top h-90 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-orange-600 text-3xl font-semibold">
          {details.title}
        </h1>

        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          {/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                  <img
                    src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
                    alt={details.owner}
                    className="h-8 w-8 align-middle rounded-full"
                  />
                  <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                    {details.owner}
                  </p>
                </div> */}

          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-orange-500"
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
              {moment(details.date).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-orange-500"
              viewBox="0 0 48 48"
            >
              <circle
                cx="29.218"
                cy="29.218"
                r="13.282"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M25.115 34.294a3.958 3.958 0 0 0 3.32 1.494h1.993a3.32 3.32 0 0 0 0-6.641h-2.159a3.32 3.32 0 1 1 0-6.641h1.993A3.565 3.565 0 0 1 33.582 24m-4.317-3.32v16.602m-12.77-12.59a4.468 4.468 0 0 1-1.413-3.277v-4.317a4.464 4.464 0 0 1 4.483-4.482a4.673 4.673 0 0 1 3.486 1.66M13.09 17.43h5.645m-5.645 3.32h5.645"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.02 31.774a13.282 13.282 0 1 1 15.754-15.753"
              />
            </svg>
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {details.price}/D
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
              {details.rate}
            </p>
          </div>
        </div>

        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {details.description}
        </p>

        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-orange-500"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>

          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            {details.location}
          </p>
          <Map location={details.location} />
        </div>
      </div>

      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10">
        <div className="absolute left-10 right-0 -top-14">
          <img
            unoptimized
            alt={details.owner.owner_username}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
            src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
          />
        </div>
        <h3 className="text-black mt-4 mb-4 text-xl font-bold">
          {details.owner.owner_username}
        </h3>
        <p className="text-black text-ls">Owner Bio</p>
      </div>

      <Comments postId={details.id} />
    </>
  );
}
