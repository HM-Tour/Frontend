'use client';

import { Inter } from '@next/font/google'
import Header from './components/Header';
import PostDetails from './Post/page';
import Map from './components/Map'
import Login from './Login/page';
import PostsCard from './components/PostsCard';
import Link from 'next/link';

// const posts = [
//   {owner : 'noor1' ,title : 'Paries', description : 'Tourism to Paries', date : '1/2/2023', rate : '5' , location : 'Paries',price : '50$', image : 'https://luggagehero.com/wp-content/uploads/2020/11/paris-statistics-banner.png'  },
//   {owner : 'noor2' ,title : 'jerusalem', description : 'Tourism to Jerusalem' , date : '2/2/2023' , rate : '5' , location : 'jerusalem', price : '70$', image : 'https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2011/02/jerusalem-purple.jpg?resize=1024%2C683&ssl=1'}
// ]

const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  // console.log('data:>> ', data);
  // console.log('done:>> ', done);

  // const {tokens} = useContext(AuthContext)
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      {/* <Header/> */}
      {/* <LoginForm/> */}

          {/* {posts.map((post) => <PostsCard key={post.title} post={post} />)} */}
          {Login && 
                <Link href={<PostsCard/>}>
                  
                </Link>
                }
          {/* <PostsCard/> */}

      
      
      {/* {tokens ? <><Form/></> : <LoginForm/>} */}
      </div>
    </>
  )
}

