"use client"


import Image from "next/image";
import Link from "next/link";
import Menu from "./component/Menu"
import TextType from './component/TextType';
import { useState } from "react";



export default function Home(){
  return(
    <>

      
      
      <div className="flex justify-center h-[800px] bg-amber-100">
        <div className="flex justify-center h-[800px] sm:hidden">
          <Menu />
        </div>
        <div className="hidden sm:block">
          <Menu />
        </div>

        <div className=" flex-1 hidden sm:block min-w-0 h-[800px] ">
          <div className="relative group rounded-2xl overflow-hidden w-full max-w-full h-full bg-amber-100 flex flex-col justify-center items-center col-span-1
                          transition-all duration-500 ease-in-out 
                          hover:scale-100 hover:-translate-y- hover:shadow-2xl hover:z-5 ">

            <div className="w-full h-full transition-transform duration-700 group-hover:scale-110 ">
              <div className=" relative group overflow-hidden w-full h-full block object-cover bg-cover bg-center  "
              style={{backgroundImage: "url(/bg.png)"}}/>

                
                

                <div className="absolute inset-0 z-20 w-full h-full justify-center items-center 
                                        bg-black/60 opacity-0 group-hover:opacity-100 
                                        transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                          <div className="text-white sm:text-2xl text-xl font-bold font-serif flex flex-col items-center justify-center h-full w-full ">
                            <TextType 
                              as="div"
                              typingSpeed={75}
                              pauseDuration={1500}
                              showCursor
                              cursorCharacter="_"
                              text={["歡迎來到我的主頁!","希望這裡的風景你也會喜歡~","Welcome to my homepage!", "Feel free to look around and enjoy."]}
                              deletingSpeed={50}
                              variableSpeed={{ min: 60, max: 120 }}
                              cursorBlinkDuration={0.5}
                            />
        
                          </div>
                          
                        
                </div>
            </div>
            </div>
    
            

          

        </div>
        
        
        

        
      </div>
      
    </>
  );
}
