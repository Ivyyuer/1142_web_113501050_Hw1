"use client"


import Image from "next/image";
import Menu from "../../components/Menu";
import Link from "next/link";
import { LuHouse} from "react-icons/lu";
import TextType from '../../components/TextType';
import { useState } from "react";
import { useRef } from "react";
import ProjectCard from "../../components/ProjectCard";



export default function DesignProject() {
  const projectList = [
    {
      id: 1,
      img: "/de1.jpg",
      tool: "Canva",
      place: "IG圖文製作 (高中社團活動)",
      ins: "版面看起來有一致性又有溫度",
    },
    {
      id: 2,
      img: "/de2.png",
      tool: "Canva",
      place: "IG圖文製作",
      ins: "依每本書的主題和色調設計",
    },
    {
      id: 3,
      img: "/de3.png",
      tool: "Canva",
      place: "IG圖文製作 (高中讀書心得)",
      ins: "風格溫暖，敘事感",
    },
    {
      id: 4,
      img: "/de4.jpg",
      tool: "Canva",
      place: "IG圖文製作 (高中讀書心得)",
      ins: "依每本書的主題和色調設計",
    },
    {
      id: 5,
      img: "/de5.jpg",
      tool: "Canva",
      place: "IG圖文製作 (高中讀書心得)",
      ins: "風格溫暖，敘事感",
    },
    {
      id: 6,
      img: "/de6.jpg",
      tool: "Canva",
      place: "IG圖文製作 (高中讀書心得)",
      ins: "依每本書的主題和色調設計",
    },
    {
      id: 7,
      img: "/de7.jpg",
      tool: "Figma",
      place: "介面設計 (大學課程心得)",
      ins: "版面看起來有一致性又有溫度",
    },
  ];








  return (
    <>
      <div className="flex h-full min-h-screen">
        <div className="sm:block hidden">
          <Menu />
        </div>
        
        <div className="bg-[#F7C85C] h-full w-full rounded-2xl p-4 leading-10">
          <Link href="/" className="sm:hidden text-gray-800">
            <LuHouse />
          </Link>
          
          <div className="text-gray-800 text-2xl font-bold font-serif p-2">
            Design Project 設計專案
          </div>
          
          <div className="text-gray-80 text-[15px] p-2 font-serif">
            <TextType 
              as="div"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              text={[
                "這裡收錄了我的平面設計作品~",
                "我很享受在一次次的設計中找到自己的風格與新的靈感",
                "希望你也會看的開心!"
              ]}
              deletingSpeed={50}
              variableSpeed={{ min: 60, max: 120 }}
              cursorBlinkDuration={0.5}
            />
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 p-5 justify-items-center">
            {/* 跑迴圈生成所有作品卡片 */}
            {projectList.map((project) => (
              <ProjectCard 
                key={project.id}
                imgSrc={project.img}       
                tool={project.tool} 
                place={project.place} 
                inspiration={project.ins} 
              />
            ))}

            <div className="bg-amber-50 rounded-2xl w-80 max-w-full aspect-square bg-[url('/pic2.gif')] bg-cover bg-center shadow-lg transition-transform hover:scale-105 duration-300" />
            <div className="bg-amber-50 rounded-2xl w-80 max-w-full aspect-square bg-[url('/pic3.jpg')] bg-cover bg-center shadow-lg transition-transform hover:scale-105 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}
