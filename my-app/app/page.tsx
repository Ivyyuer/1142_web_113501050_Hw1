"use client"


import Image from "next/image";
import Link from "next/link";
import Menu from "./component/Menu"

export default function Home(){
  return(
    <>
      
      <div className="flex h-[800px]">
        <div className="">
          <Menu />
        </div>

        <div className=" flex-1 hidden sm:block min-w-0 h-[800px] ">
          <div className="relative group bg-amber-50 rounded-2xl w-full max-w-full h-[800px] flex flex-col justify-center items-center col-span-1
                          overflow-hidden cursor-pointer
                          transition-all duration-500 ease-in-out 
                          hover:scale-100 hover:-translate-y-2 hover:shadow-2xl hover:z-10 ">
    
            <div className=" absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{backgroundImage: "url(/bg.png)"}}/>

                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                                        bg-black/60 opacity-0 group-hover:opacity-100 
                                        transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                          <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
                            嗨嗨~歡迎來到我的主頁!
                            <br/>
                            Hi~ Welcome to my homepage!
                          </div>
                          <div className="text-white/90 sm:text-lg text-sm font-serif text-center">
                            
                            
                          </div>
                        
                      </div>

                    </div>

        </div>
        
        
        

        
      </div>
      
    </>
  );
}
