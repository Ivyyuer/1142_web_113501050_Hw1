"use client"

import Image from "next/image";
import Menu from "../../components/Menu";
import Link from "next/link";
import { useRef, useState } from "react";
import { LuHouse } from "react-icons/lu";
import TextType from '../../components/TextType';
import ProgramCard from "../../components/ProgramCard";
import dynamic from 'next/dynamic';
const Ballpit = dynamic(() => import("@/components/Ballpit"), { ssr: false });

export default function ProgrammingProject() {
  const programList = [
    {
      id: 1,
      name: "Thorns and Roses 玫瑰與荊棘",
      description: "Unreal Engine 4 遊戲專案",
      imageurl: "/gamehome.png",
      role: "劇情UI(對話框、信件等)的Blueprint、時程規劃",
      demoUrl: "https://youtu.be/EOJe62KrPtg"
    },
    {
      id: 2,
      name: "今天去哪chill?",
      description: "Python 專案",
      imageurl: "/pythonimage.jpg",
      role: "與組員合作撰寫程式 (加入 AI 協作)",
      demoUrl: "https://youtu.be/jcS78AaQ6v4"
    }
  ];

  return (
    <>
      <div className="flex h-screen w-full overflow-hidden">
        {/* 左側選單 */}
        <div className="sm:block hidden h-full">
          <Menu />
        </div>
        
        {/* 右側主容器：這裡設定為 relative 和 overflow-hidden 確保背景球池不會跑出去 */}
        <div className="relative flex-1 h-full m-2 rounded-2xl overflow-hidden bg-[#72e8e2]/80 shadow-inner">
        
          {/* 3. 背景球池層：z-0 且禁止滑鼠事件避免干擾滑動 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Ballpit
              count={80}
              gravity={0.3}
              followCursor={false}
              colors={["#5227FF","#7cff67","#ff6b6b"]}
            />
          </div>

         
          <div className="relative z-10 w-full h-full overflow-y-auto p-4 custom-scrollbar">
            
            
            <Link href="/" className="sm:hidden inline-block p-2 text-amber-800">
              <LuHouse size={24} />
            </Link>
            
            <div className="text-gray-800 text-2xl font-bold font-serif p-2">
              Programming Project 程式專案
            </div>
            
            <div className="text-gray-800 text-[15px] font-serif leading-normal p-2">
              <TextType
                as="div"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                text={[
                  "這裡記錄了我的程式專案足跡~",
                  "在寫程式的過程中痛苦並快樂著",
                  "但每次debug完成總是有種說不出的喜悅!",
                  "每個完成的專案就像是自己的小孩出生一樣",
                  "不管是不是足夠好都為它感到驕傲!"
                ]}
                deletingSpeed={50}
                variableSpeed={{ min: 60, max: 120 }}
                cursorBlinkDuration={0.5}
              />
            </div>

           
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 p-2 pb-20">
      
              <div className="bg-amber-50 rounded-2xl h-[300px] sm:h-auto min-h-[300px] w-full flex justify-center items-center row-span-2 bg-[url('/pic1.gif')] bg-cover bg-center shadow-lg" />

            
              {programList.map((item) => (
                <ProgramCard 
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  imageurl={item.imageurl}
                  role={item.role}
                  demoUrl={item.demoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}