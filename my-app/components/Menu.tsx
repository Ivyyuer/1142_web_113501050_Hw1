"use client"
import Image from "next/image";
import Link from "next/link";
import { LuHouse, LuMail, LuContact } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import Grainient from "../components/Grainient"


export default function Menu() {
  
  return (
    <>
      <div className="relative w-[300px] h-full p-4 text-blue-950 overflow-hidden border-r border-white/20">
        
        

        <div className="relative z-10 h-full flex flex-col">
          <Link href="/" className="hover:text-blue-100 transition-colors">
            <LuHouse size={24} />
          </Link>

          <div className="flex justify-center items-center w-full mt-6 mb-4">
            <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center border-2 border-white/50">
              <Image src="/hiiiiiiii拷貝.png" alt="main" width={80} height={80}/>
            </div>
          </div>

          <div className="text-center font-serif font-bold text-lg text-blue-950">楊渝媗</div>
          <div className="text-center font-serif text-sm opacity-90 leading-relaxed mb-6">
            一個熱愛文字、遊戲和音樂的普通人～
          </div>

          <div className="flex flex-col gap-3 grow">
            <Link href="/about">
              <div className="bg-white/40 backdrop-blur-sm p-[16px] rounded-md text-amber-950 font-serif hover:bg-blue-100 transition-all">關於我</div>
            </Link>

            <Link href="/design.project">
              <div className="bg-white/40 backdrop-blur-sm p-[16px] rounded-md text-amber-950 font-serif hover:bg-blue-100 transition-all">設計專案</div>
            </Link>

            <Link href="/programming-project">
              <div className="bg-white/40 backdrop-blur-sm p-[16px] rounded-md text-amber-950 font-serif hover:bg-blue-100 transition-all">程式專案</div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-auto text-sm pb-4">
            <div className="text-center p-1.5 flex  items-center gap-2 border-t border-white/20 mt-4">
              <LuContact />聯繫我
            </div>
            
            <div className="flex items-center gap-2 ">

              <a href="mailto:a0903808507@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 hover:text-blue-100">
                <LuMail className="shrink-0"/>a0903808507@gmail.com
              </a>

            </div>

            <a href="https://www.instagram.com/ivy.0305..." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 hover:text-blue-100">
              <FaInstagram className="shrink-0"/>ivy.0305
            </a>

            <a href="https://www.linkedin.com/..." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 hover:text-blue-100">
              <SlSocialLinkedin className="shrink-0"/>Ivy Yang
            </a>

            <a href="https://vocus.cc/user/@Ivy_live" target="_blank" rel="noopener noreferrer" className="text-[12px] px-2 opacity-80 hover:text-blue-100">
              方格子(寫作專欄): Ivy.聆空
            </a>
          </div>
        </div>

      </div>
    </>
  );
}