"use client"
import { useState } from "react";

interface ProgramCardProps {
  name: string;
  description: string;
  imageurl: string;
  role: string;
  demoUrl: string;
}

export default function ProgramCard({ name, description, imageurl, role, demoUrl }: ProgramCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`relative group bg-amber-50 rounded-2xl h-64 md:h-50 flex flex-col justify-center items-center col-span-2 
                overflow-hidden cursor-pointer transition-all duration-500 ease-in-out 
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10
                ${isOpen ? "ring-4 ring-green-200" : "ring-0"}`}
    >
      {/* 背景圖片 */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 
                    ${isOpen ? 'scale-110 blur-sm' : 'group-hover:scale-110'}`}
        style={{backgroundImage: `url(${imageurl})`}}
      />

      {/* 預設標題層：滑鼠移入或點擊時消失 */}
      <div className={`relative z-10 w-full transition-all duration-500 
                      ${isOpen ? "opacity-0 -translate-y-10" : "group-hover:opacity-0 group-hover:-translate-y-10"}`}>
        <div className="text-black sm:text-2xl text-xl font-bold font-serif bg-amber-50/60 w-full p-4 flex justify-center items-center text-center">
          {name}
        </div>
        <div className="text-black sm:text-xl text-xl font-serif bg-amber-50/60 w-full p-2 flex justify-center items-center text-center">
          {description}
        </div>
      </div>

      {/* 遮罩說明層：滑鼠移入或點擊時出現 */}
      <div className={`absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                      bg-black/70 transition-all duration-500
                      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"}`}>
        <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
          我在專案中的角色:
        </div>
        <div className="text-white/90 sm:text-lg text-sm font-serif text-center mb-4">
          {role}
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation(); // 防止點擊按鈕時觸發卡片的關閉事件
            window.open(demoUrl, '_blank');
          }}
          className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-green-200 transition-colors"
        >
          去看看 demo
        </button>
      </div>
    </div>
  );
}
