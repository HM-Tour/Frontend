"use client";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function CreateComment({ postId }) {
  const idt = JSON.parse(localStorage.getItem("details"));

  const { tokens } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${tokens.access}`);

    let body = e.target.comment.value;
    const formData = new FormData();
    formData.append("body", body);
    formData.append("post", postId);
    formData.append("owner", 1);

    const requestOptions = {
      method: "POST",
      body: formData,
      headers: headers,
    };

    await fetch(
      `http://52.87.231.115:8000/api/comments/post/${postId}`,
      requestOptions
    );

    const textArea = document.querySelector("textarea[name=comment]");
    textArea.value = "";
  };

  return (
    <>
    <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="col-span-1 lg:col-start-1 lg:col-span-6 mt-10">
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <form onSubmit={handleSubmit} className="w-full p-4">
          <div className="mb-2">
            <label
              for="comment"
              className="text-xl mb-8 font-semibold border-b pb-4"
            >
              Add a comment
            </label>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea
                className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                name="comment"
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 text-center text-white rounded-full transition bg-sky-400 hover:bg-sky-500 active:bg-sky-400 focus:bg-sky-500 sm:w-max">
              Post Comment
            </button>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
