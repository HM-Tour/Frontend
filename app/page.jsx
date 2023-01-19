'use client';

import { Inter } from '@next/font/google'
import Map from './components/Map'
import Articles from './components/Articles';

import PostsCard from './components/PostsCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {

  // const {tokens} = useContext(AuthContext)
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
    <div className="lg:col-span-8 col-span-1">
      
      {/* <Header/> */}
      {/* <LoginForm/> */}
    
          <PostsCard/>
          </div>
          

          

          <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">

          <Articles/>
          </div>
          </div>
          

      
          </div>
      {/* {tokens ? <><Form/></> : <LoginForm/>} */}
      </div>
    </>
  )
}

