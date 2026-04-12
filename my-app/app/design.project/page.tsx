"use client"


import Image from "next/image";
import Menu from "../component/Menu";
import Link from "next/link";
import { LuHouse} from "react-icons/lu";

import { useRef } from "react";



export default function designProject(){
  let projectdata ={
    "css":{
      "projectname":""
    },

    "des":{
      "tool":{"0":"工具:","1":"Canva","2":"Figma"},
      "place":"目的:IG圖文製作",
      "ins":{"0":"靈感:","1":"依每本書的主題和色調設計","2":"版面看起來有一致性又有溫度","3":"風格溫暖，敘事感",},
    },

    "img":{
      "1":"/de1.jpg",
      "2":"/de2.png",
      "3":"/de3.png",
      "4":"/de4.jpg",
      "5":"/de5.jpg",
      "6":"/de6.jpg",
      "7":"/de7.jpg",
    
    },





  };


  const videoRef = useRef<HTMLVideoElement | null>(null);






  return(
    <>
      <div className="flex h-full">
        
          <div className="sm:block hidden">
            <Menu />
          </div>
            <div className="bg-[#F7C85C] h-full w-full rounded-2xl p-4 leading-10">
              <Link href="/" className="sm:hidden">
          
                <LuHouse />
          
              </Link>
              <div className="text-gray-800 text-2xl font-bold font-serif justify-center items-center">Design Project 設計專案</div>
              <div className="text-gray-80 text-[15px] justify-center items-center font-serif">這裡收錄了我的平面設計作品~</div>
                <div className="bg-[#F7C85C] rounded-2xl grid sm:grid-cols-3 grid-cols-1  gap-5 p-5">

                  
                    


                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1 
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][1]})` || ""}}
                    />

                    <div className="relative z-10 w-full transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                      
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                    bg-black/60 opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                      <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                        {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                      </div>
                      <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                        {projectdata["des"]["place"]}(高中社團活動)
                        {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][2]}
                        
                      </div>
                      
                      
                    </div>

                  </div>

                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][2]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][2]}
                          
                        </div>
                      

                    </div>

                  </div>
                  

                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][3]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}(高中讀書心得)
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][1]}
                          
                        </div>
                      
                    </div>

                  </div>

                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][4]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}(高中讀書心得)
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][1]}
                          
                        </div>
                      
                    </div>

                  </div>

                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][5]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}(高中讀書心得)
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][1]}
                          
                        </div>
                      
                    </div>

                  </div>


                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][6]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][1]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}(高中讀書心得)
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][1]}
                          
                        </div>
                      
                    </div>

                  </div>

                  <div className="relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex flex-col justify-center items-center col-span-1
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
  
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url(${projectdata["img"][7]})` || ""}}
                    />

                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                      bg-black/60 opacity-0 group-hover:opacity-100 
                                      transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                          {projectdata["des"]["tool"][0]}{projectdata["des"]["tool"][2]}
                        </div>
                        <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                          {projectdata["des"]["place"]}(大學課程心得)
                          {projectdata["des"]["ins"][0]}{projectdata["des"]["ins"][2]}
                          
                        </div>
                      
                    </div>

                  </div>

                  <div className=" bg-amber-50 rounded-2xl  sm:h-full w-full flex justify-center items-center
                                    bg-[url('/pic2.gif')] bg-cover bg-center">
                    
                  </div>

                  <div className=" bg-amber-50 rounded-2xl  sm:h-full w-full flex justify-center items-center
                                    bg-[url('/pic3.jpg')] bg-cover bg-center">
                    
                  </div>


                

                
                  
                </div>
                </div> 

      </div>
    
    
    </>
  );
}

