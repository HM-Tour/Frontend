"use client";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform registration logic here, such as sending a request to your server
    console.log(user);
  };

  return (
    <div class="bg-petra flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <img src="https://i.postimg.cc/76VP8VzQ/logo-removebg-preview.png"width="150" alt="" srcset="" />
        <h1 class="mb-2 text-2xl">HM Tour</h1>
        <span class="text-gray-300"> Sign up </span>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="username"  value={user.username}  placeholder="UserName" onChange={handleChange} />
        </div>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
        </div>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
        </div>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="password" name="passwordConfirm" value={user.passwordConfirm} placeholder="Confirm password" onChange={handleChange} />
        </div>
        
        <div class="mt-8 flex justify-center text-lg text-black">
          {/* <Link href = "/"> */}
          <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
