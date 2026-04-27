"use client"

import Image from "next/image";
import Menu from "../../components/Menu";
import Link from "next/link";
import { useRef, useState } from "react";
import { LuHouse } from "react-icons/lu";
import TextType from '../../components/TextType';
import ProgramCard from "../../components/ProgramCard";

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
      <div className="flex h-full min-h-screen">
        <div className="sm:block hidden">
          <Menu />
        </div>
        
        <div className="bg-[#7FB77E] min-h-screen w-full rounded-2xl p-4 leading-10">
          <Link href="/" className="sm:hidden text-amber-100">
            <LuHouse />
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

          <div className="bg-[#7FB77E] rounded-2xl grid sm:grid-cols-3 grid-cols-1 gap-4 p-2">
            {/* 左側固定的圖檔 */}
            <div className="bg-amber-50 rounded-2xl h-[300px] sm:h-full w-full flex justify-center items-center row-span-2 bg-[url('/pic1.gif')] bg-cover bg-center shadow-lg" />

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
    </>
  );
}