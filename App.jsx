import React from 'react'
import Factorial from './Factorial'

const App = () => {
  return (
    <>
    
    <Factorial/>
    
    <div className="bg-[url(https://c4.wallpaperflare.com/wallpaper/109/839/817/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg)]
         bg-no-bg-no-repeat w-100% bg-cover h-170 p-5 flex flex-col justify-center items-center ">
          <h1 className="w-100 text-center font-bold bg-green-400 m-3 
          p-5 italic text-2xl underline decoration-red-500 decoration-2 decoration-wavy rounded-4xl shadow-2xl shadow-red-400">
              Sample Project
          </h1>
          <h2 className="backdrop-blur-2sl w-50% text-center text-2xl 
          font-bold shadow-2xl shadow-amber-500 rounded-2xl
           text-white hover:bg-blue-400 ">Welcome to Tailwind</h2>
    
          <div className="bg-white p-10 rounded-3xl grid grid-cols-4 gap-x-2 gap-y-2">
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>
              <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs
               shadow-black"></div>        
          </div>   
          </div></>
  )  
}

export default App