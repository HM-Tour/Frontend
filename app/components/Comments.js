"use client";
import React, { useContext, useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import axios from "axios";
import { AuthContext } from "../contexts/auth";

export default function Comments({ postId }) {
  const { tokens } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/comments/post/${postId}`
      );
      setData(result.data);
    };
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = async (id) => {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${tokens.access}`);

    const requestOptions = {
      method: "DELETE",
      headers: headers,
    };

    await fetch(`http://127.0.0.1:8000/api/comments/${id}`, requestOptions);
  };

  const del = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline mr-2 text-orange-500"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.996.996 0 1 1 1.41-1.41L12 12.59l1.41-1.41a.996.996 0 1 1 1.41 1.41L13.41 14l1.41 1.41a.996.996 0 1 1-1.41 1.41L12 15.41l-1.41 1.41a.996.996 0 1 1-1.41-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
      />
    </svg>
  );

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>

        {data.map((item) => (
          <div key={item.id} className="border-b border-gray-100 mb-4 pb-4">
            <div className="flex">
              
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong>{item.owner_username}</strong>{" "}
                <span className="text-xs text-gray-400">{item.created_at}</span>
                <p className="text-sm">{item.body}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-blue-400 hover:bg-blue-200 active:bg-blue-400 focus:bg-yellow-300 sm:w-max"
                >
                  <span className="block text-black font-semibold text-sm">
                    {del}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid  place-items-center">
        <CreateComment postId={postId} />
      </div>
    </>
  );
}
