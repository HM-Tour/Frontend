"use client";
import React, {
  useContext,
  useEffect,
  useState,
  setNotificationCount,
} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/logo_transparent.png";
import { useRouter } from "next/navigation";
export default function Headero({ isAuthenticated }) {


  
  const router = useRouter();


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("data");
    router.push("/");
    location.reload(true)

  };

  return (
    <header>
      <nav className="">
        <div className="container mx-auto px-10 md:px-12 lg:px-7">
          <div className="border-b w-full inline-block border-orange-600 py-1">
            <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <Image
                    src={Logo}
                    className="w-14"
                    alt="HM-Tour"
                    width="144"
                    height="133"
                  />
                  <span className="text-2xl font-bold text-orange-600">
                    HM-Tour
                  </span>
                </a>

                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-10 -mr-2 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                </button>
              </div>

              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:float-left md:contents lg:w-7/12">
                <div className="text-gray-600 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                    <li>
                      <Link
                        href="/"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2 text-orange-500"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      {isAuthenticated ? (
                        <Link
                          href="/Profile"
                          className="block md:px-4 transition hover:text-yellow-700"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline mr-2 text-orange-500"
                              viewBox="0 0 48 48"
                            >
                              <g fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                                  clipRule="evenodd"
                                />
                                <path d="M12 35.63c0-1.033.772-1.906 1.8-2.02c7.715-.854 12.72-.777 20.418.019a1.99 1.99 0 0 1 1.108 3.472c-9.085 7.919-14.277 7.81-22.686.008c-.41-.38-.64-.92-.64-1.478Z" />
                                <path
                                  fillRule="evenodd"
                                  d="M34.115 34.623c-7.637-.79-12.57-.864-20.206-.019A1.028 1.028 0 0 0 13 35.631c0 .286.119.557.32.745c4.168 3.866 7.326 5.613 10.413 5.624c3.098.011 6.426-1.722 10.936-5.652a.99.99 0 0 0-.554-1.724ZM13.69 32.616c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 1.662 5.221c-4.575 3.988-8.385 6.16-12.257 6.145c-3.883-.014-7.525-2.223-11.766-6.158A3.018 3.018 0 0 1 11 35.63a3.028 3.028 0 0 1 2.69-3.015Z"
                                  clipRule="evenodd"
                                />
                                <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" />
                                <path
                                  fillRule="evenodd"
                                  d="M24 26a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </svg>
                          </span>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </li>
                    <li>
                      <Link
                        href="/About"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2 text-orange-500"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="currentColor"
                              d="M37 40H11l-6 6V12c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6z"
                            />
                            <g fill="#fff">
                              <path d="M22 20h4v11h-4z" />
                              <circle cx="24" cy="15" r="2" />
                            </g>
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Team"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2 text-orange-500"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Zm8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm.6 11.998A2 2 0 0 1 3 13V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a4.963 4.963 0 0 1-.304-.975Zm9.496.975A3 3 0 0 0 18 13V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a4.966 4.966 0 0 1-.304.975ZM7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8h-5.5ZM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0V9.25Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l md:float-left md:contents">
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 px-4 text-center text-white rounded-full transition bg-orange-300 hover:bg-orange-200 active:bg-orange-300 focus:bg-orange-300 sm:w-max"
                    >
                      <span>Logout</span>
                    </button>
                  ) : (
                    <>
                      <Link
                        href="/Register"
                        className="w-full py-2 px-4 mx-3 text-center text-white rounded-full transition bg-orange-300 hover:bg-orange-200 active:bg-orange-300 focus:bg-orange-300 sm:w-max"
                      >
                        <span>SignUp</span>
                      </Link>
                      <Link
                        href="/Login"
                        className="w-full py-2 px-4 text-center text-white rounded-full transition bg-orange-300 hover:bg-orange-200 active:bg-orange-300 focus:bg-orange-300 sm:w-max"
                      >
                        <span>LogIn</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
