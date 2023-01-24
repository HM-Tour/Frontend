import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs"

const person = [
  {
    img: "/assets/ibraheem.jpg",
    name: "Ibraheem Almanaser",
    job: "Web Developer",
    fb: "",
    gh: "",
    ln: "",
  },
  {
    img: "/assets/mohammad.jpg",
    name: "Mohammad Alhanoti",
    job: "Web Developer",
    fb: "",
    gh: "",
    ln: "",
  },
  {
    img: "/assets/osama.jpg",
    name: "Osama Eldadow",
    job: "Web Developer",
    fb: "",
    gh: "",
    ln: "",
  },
  {
    img: "/assets/mostafa.jpg",
    name: "Mostafa Albalbesi",
    job: "Web Developer",
    fb: "",
    gh: "",
    ln: "",
  },
  {
    img: "/assets/noor.jpg",
    name: "Noor Alkhateeb",
    job: "Web Developer",
    fb: "https://www.facebook.com/noor.alkhateb",
    gh: "https://github.com/Noor696",
    ln: "https://www.linkedin.com/in/nooralkhateeb/",
  }
];

export default function Team() {
    return (

     
      <>
        <div class="py-10 bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img
                  src="https://cdn.pixabay.com/photo/2020/02/20/06/24/team-4864038_960_720.jpg"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                ></img>
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                  About our team
                </h2>
                <p class="mt-6 text-gray-600">
                  We are a group of dedicated individuals who are passionate about
                  what we do. We strive to deliver top-quality results and exceed
                  our client's expectations every time. Our team is comprised of
                  experts in various fields, including software development,
                  design, and project management.
                </p>
                <br></br>
                <h4 class="text-2xl text-gray-900 font-bold md:text-2xl">
                  {" "}
                  Our Mission
                </h4>
                <p class="mt-6 text-gray-600">
                  Our mission is to provide accurate and unbiased information to
                  help travelers make informed decisions when choosing tours. We
                  believe that every traveler's experience should be unique and
                  special, and we are dedicated to helping them find the perfect
                  tour for their individual needs and preferences. We strive to
                  make it easy for travelers to find and compare tours based on
                  their preferences and budget. Our goal is to be the most
                  reliable and trusted source for tour ratings and reviews on the
                  internet, and we are committed to providing a valuable service
                  to both travelers and tour providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-3xl py-5 text-center mb-5">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
          {person.map((per,i)=>
          <div className=" px-6 py-4 flex justify-center items-center flex-col rounded-xl shadow-lg border border-gray-200 hover:-translate-y-1 transition duration-700 group" key={i}>
            <img className="rounded-3xl justify-center item-center" width={100}
                height={100} src={per.img} alt="person"/>
            <p className="text-lg text-black group-hover:text-orange-600 text-center font-medium capitalize py-2">{per.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-xl mb-5">{per.job}</p>

            </div>

            <div className="flex gap-5 items-center">
            <a href={per.fb} >
              <BsFacebook className="text-black hover:text-orange-600"/>
              </a>
     
              <a href={per.gh}>
              <BsGithub className="text-black hover:text-orange-600"/>
              </a> 

              <a href={per.ln}>
              <AiFillLinkedin className="text-black hover:text-orange-600"/>
              </a> 
            </div>

  

          </div>
          
          )}

        </div>

        

      </section>
      </>
    );
  }
  