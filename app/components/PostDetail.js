"use client";
import Comments from "./Comments";
import Map from "./Map";
// import React from "react";
import moment from "moment";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { MdStarRate } from "react-icons/md";

export default function PostDetail() {
  const details = JSON.parse(localStorage.getItem("details"));

  return (
    <>
      {/* -----------post detail section--------- */}

      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-20 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt=""
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={details.image}
            />

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="p-1 justify-between flex mb-5">
                <div class="flex">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                    alt={details.owner}
                    className="h-8 w-8 align-middle rounded-full"
                  />

                  <span class="mx-3 mt-1">{details.owner}</span>
                </div>
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {moment(details.date).format("MMM DD, YYYY")}
                </h2>
              </div>
              <h1 class="capitalize text-gray-900 text-3xl title-font font-medium mb-5">
                {details.title}
              </h1>
              <div class="flex mb-10">
                <span class="flex items-center">
                  <div className="p-1 justify-between flex">
                    <Rating
                      className="mr-auto ml-1"
                      name="read-only"
                      value={details.rate}
                      readOnly
                    />
                  </div>
                  <span class="text-gray-600 ml-3">{details.rate}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mr-1 ml-1 text-amber-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"
                    />
                  </svg>
                  <span class="text-gray-600">rate</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 ">
                  Trip Cost / Day - {details.price}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 inline mx-2 text-amber-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23.59 3.475a5.1 5.1 0 0 0-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 0 0-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 0 1-.67.01a5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21c0 .9 1.04 1.2 2.24 1.65c2.1.7 3.84 1.58 3.84 3.64c0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32c1.3 0 2.17-.55 2.17-1.42c0-.87-.88-1.1-2.54-1.72c-1.76-.63-3.43-1.52-3.43-3.6c0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z"
                    />
                  </svg>
                </span>
              </div>

              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <p class="leading-relaxed font-normal mb-10">
                  {details.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map section */}

      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-20 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <span class="inline text-2xl align-middle text-gray-700 ml-2 font-medium text-lg">
                <p>
                  The Trip was in City{" "}
                  <h2 className="text-3xl"><strong>{details.location}</strong></h2>
                </p>
              </span>
            </div>
            <Map location={details.location} />
          </div>
        </div>
      </section>

      <div>
        <Comments postId={details.id} />
      </div>
    </>
  );
}
