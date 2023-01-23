"use client";
import  {useContext,  useState ,useEffect} from "react";
import { Redirect } from 'react-router-dom';
import {AuthContext} from '../contexts/auth';
import { useRouter } from "next/navigation";



export default function Login(){

  const router = useRouter();
  const { tokens, isAuthenticated, login } = useContext(AuthContext);

   




  const[UserName,setUserName]=useState('')


  const [PassWord,setPassWord]=useState('')
  const [isRedirect, setIsRedirect] = useState(false);
    

  const usernameOnChangeHandler=(e)=>{

    setUserName(e.target.value)
           
    }

  const passwordOnChangeHandler=(e)=>{

    setPassWord(e.target.value)
      
    }







  const handleOnSubmit =(e)=>{
      
      e.preventDefault()
      login({"username":UserName,
      "password":PassWord
    }
      )

      
    

      
    
   


     
    
  }

    

    return (
      <div class="bg-petra flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <img src="https://i.postimg.cc/76VP8VzQ/logo-removebg-preview.png"width="150" alt="" srcset="" />
        <h1 class="mb-2 text-2xl">HM Tour</h1>
        <span class="text-gray-300"> Login </span>
      </div>
      <form action="#" onSubmit={handleOnSubmit}>
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="UserName" onChange={usernameOnChangeHandler} />
        </div>

              <div class="mb-4 text-lg">
                <input
                  class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="password"
                  onChange={passwordOnChangeHandler}
                />
              </div>
              <div class="mt-8 flex justify-center text-lg text-black">
                {/* <Link href = "/"> */}
                <button
                  type="submit"
                  class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
                {/* </Link> */}

             
              </div>
            </form>
          </div>
        </div>
      </div>
    );


    }