'use client';

import { Inter } from '@next/font/google'
import Header from './components/Header';
import PostDetails from './components/PostDetails';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const {tokens} = useContext(AuthContext)
  return (
    <>
      {/* <Header/> */}
      {/* <LoginForm/> */}
      <PostDetails/>
      {/* {tokens ? <><Form/></> : <LoginForm/>} */}
    </>
  )
}