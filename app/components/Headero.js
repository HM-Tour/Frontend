import React, {useContext} from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "public/assets/logo_transparent.png"

export default function Headero() {

    return (
        <header>
        <nav class="">
        <div class="container mx-auto px-10 md:px-12 lg:px-7">
        <div className="border-b w-full inline-block border-blue-400 py-1">
            <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
                    <a href="/" aria-label="logo" class="flex space-x-2 items-center">
                        <Image src={Logo} class="w-12 " alt="HM-Tour" width="144" height="133"/>
                        <span class="text-2xl font-bold text-black">HM-Tour</span>
                    </a>

                    <button aria-label="humburger" id="hamburger" class="relative w-10 h-10 -mr-2 lg:hidden">
                        <div aria-hidden="true" id="line" class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                        <div aria-hidden="true" id="line2" class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                    </button>
                </div>

                <div class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:float-left md:contents lg:w-7/12">
                    <div class="text-gray-600 lg:pr-4">
                        <ul class="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                            <li>
                                <Link href="/" class="block md:px-4 transition hover:text-yellow-700">
<span>Home</span>
</Link>
                            </li>
                            <li>
                                <Link href="/Profile" class="block md:px-4 transition hover:text-yellow-700">
<span>Profile</span>
</Link>
                            </li>
                            <li>
                                <Link href="/About" class="block md:px-4 transition hover:text-yellow-700">
<span>About</span>
</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l md:float-left md:contents">
                        <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition active:bg-red-100 focus:bg-red-50 sm:w-max">
                            <span class="block text-black font-semibold text-sm">
                                Sign up
                            </span>
                        </button>
                        <Link href="/Login" class="w-full py-3 px-6 text-center rounded-full transition bg-blue-400 hover:bg-blue-200 active:bg-blue-400 focus:bg-yellow-300 sm:w-max">
<span>Login</span>
</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
    </header>
    )
  }