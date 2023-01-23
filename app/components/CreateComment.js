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
      `http://127.0.0.1:8000/api/comments/post/${postId}`,
      requestOptions
    );

    const textArea = document.querySelector("textarea[name=comment]");
    textArea.value = "";
  };

  return (
    <>
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
            <button className="transition duration-500 ease hover:bg-orange-900 inline-block bg-orange-600 text-lg font-medium rounded-full text-white px-5 py-0 cursor-pointer">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
