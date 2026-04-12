
"use client"


import Image from "next/image";
import Menu from "../component/Menu";
import Link from "next/link";

import { useRef } from "react";



export default function ProgrammingProject(){
  let projectdata ={
    "css":{
      "projectname":""
    },

    "0":{
      "resf":"我在專案中的角色:"
    },

    "1":{
      "name":"Thorns and Roses 玫瑰與荊棘",
      "description":"unreal engine 4 遊戲專案",
      "imageurl":"/gamehome.png",
    },

    "2":{
      "name":"今天去哪chill?",
      "description":"python 專案",
      "imageurl":"/pythonimage.jpg",
    },




  };


  const videoRef = useRef<HTMLVideoElement | null>(null);






  return(
    <>
      <div className="flex h-full">
          <Link href="/" className="sm:hidden relative bg-[#F7C85C]">
            返回
          </Link>
          
          <div className="sm:block hidden">
            <Menu />
          </div>
            <div className="bg-[#7FB77E] h-full w-full rounded-2xl p-4 leading-10">
              <div className="text-amber-50 text-2xl font-bold font-serif justify-center items-center">Programming Project 程式專案</div>
              <div className="text-amber-50 text-[15px] justify-center items-center font-serif">這裡是我的程式專案足跡~</div>
                <div className="bg-[#7FB77E] rounded-2xl grid sm:grid-cols-3 grid-cols-2  gap-2">

                  <div className=" bg-amber-50 rounded-2xl h-[300px] sm:h-full w-full flex justify-center items-center row-span-2
                                    bg-[url('/pic1.gif')] bg-cover bg-center">
                    
                  </div>


                  <div className="relative group bg-amber-50 rounded-2xl h-64 md:h-50 flex flex-col justify-center items-center col-span-2 
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["1"]["imageurl"]})` || ""}}
                    />

                    <div className="relative z-10 w-full transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                      <div className="text-black sm:text-2xl text-xl font-bold font-serif bg-amber-50/60 w-full p-4 flex justify-center items-center whitespace-pre-line text-center">
                        {projectdata["1"]["name"]}
                      </div>
                      <div className="text-black sm:text-xl text-xl font-serif bg-amber-50/60 w-full p-2 flex justify-center items-center whitespace-pre-line text-center">
                        {projectdata["1"]["description"]}
                      </div>
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                    bg-black/60 opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                      <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                        {projectdata["0"]["resf"]}
                      </div>
                      <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                        劇情UI(對話框、信件等)的blueprint、時程規劃
                        
                      </div>
                      
                      <button 
                        onClick={() => window.open('https://youtu.be/EOJe62KrPtg', '_blank')}
                        className="mt-6 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-amber-200 transition-colors"
                      >
                        去看看demo
                      </button>
                      
                    </div>

                  </div>

                  <div className="relative group bg-amber-50 rounded-2xl h-64 md:h-50 flex flex-col justify-center items-center col-span-2 
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["2"]["imageurl"]})` || ""}}
                    />

                    <div className="relative z-10 w-full transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                      <div className="text-black sm:text-2xl text-xl font-bold font-serif bg-amber-50/60 w-full p-4 flex justify-center items-center whitespace-pre-line text-center">
                        {projectdata["2"]["name"]}
                      </div>
                      <div className="text-black sm:text-xl text-xl font-serif bg-amber-50/60 w-full p-2 flex justify-center items-center whitespace-pre-line text-center">
                        {projectdata["2"]["description"]}
                      </div>
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                    bg-black/60 opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                      <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                        {projectdata["0"]["resf"]}
                      </div>
                      <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                        與組員合作撰寫程式(加入AI協作)
                        
                      </div>
                      
                      <button 
                        onClick={() => window.open('https://youtu.be/jcS78AaQ6v4', '_blank')}
                        className="mt-6 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-amber-200 transition-colors"
                      >
                        去看看demo
                      </button>
                      
                    </div>

                  </div>
                  

                

                
                  
                </div>
                </div> 

      </div>
    
    
    </>
  );
}
