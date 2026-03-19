import React from 'react'
import { google_Sans,pacifico } from "./fonts";


const Cards = () => {
  return (
    <>
    <div className={`${google_Sans.className} mx-10 my-4 text-gray-600 text-sm`}>
    <div className='w-80 h-12 shadow-md hover:shadow-2xl rounded-xl flex items-center justify-center p-2 my-2'>
        <img src="/google-color.svg" className='h-full px-2'/>
        <h1>Continue with Google</h1>
    </div>
    <div className='w-80 h-12 shadow-md hover:shadow-2xl rounded-xl flex items-center justify-center p-2'>
        <img src="/github.png" className='h-full px-2'/>
        <h1>Continue with Github</h1>
    </div>
    </div>
    </>
  )
}

export default Cards