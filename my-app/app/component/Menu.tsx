"use client"
import Image from "next/image";
import Link from "next/link";
import { LuHouse, LuMail, LuContact } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";


export default function Menu() {
  
  return (
    <>
      
      <div className="bg-[#2F6B3F] w-[300px] h-full p-4 text-amber-50">
        <Link href="/">
          <LuHouse />
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/hiiiiiiii拷貝.png" alt="main" width={80} height={80}/>
          </div>
        </div>

        <div className="text-center font-serif">楊渝媗</div>
        <div className="text-center font-serif">一個熱愛文字、遊戲和音樂的普通人～</div>

        
            
            

        <Link href="/about">
          <div className="bg-[#FFF6C0] p-[16px] mt-2 rounded-md text-amber-950 font-serif">關於我</div>
        </Link>

        

        <Link href="/design.project">
          <div className="bg-[#FFF6C0] p-[16px] mt-2 rounded-md text-amber-950 font-serif">設計專案</div>
        </Link>

        <Link href="/programming-project">
          <div className="bg-[#FFF6C0] p-[16px] mt-2 rounded-md text-amber-950 font-serif">程式專案</div>
        </Link>

        <div className="grid grid-cols-1">
          <div className="p-3"></div>
          <div className="text-center p-1.5 flex justify-center"><LuContact />聯繫我</div>
              {/*icons, links*/}
          <div>
            <LuMail />a0903808507@gmail.com
          </div>
          <a 
            href="https://www.instagram.com/ivy.0305?igsh=aHppbHNmbG5xbG5y&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram/>ivy.0305
          </a>
          <a 
            href="https://www.linkedin.com/in/ivy-yang-350b213b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin/>Ivy Yang
          </a>
          <a 
            href="https://vocus.cc/user/@Ivy_live" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            方格子(寫作專欄):Ivy.聆空
          </a>
        </div>    

      </div>
    </>
  );
}