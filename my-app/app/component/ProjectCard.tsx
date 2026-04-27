import { useState } from "react";
// 定義組件接收的資料類型
interface ProjectCardProps {
    imgSrc: string;
    tool: string;
    place: string;
    inspiration: string;
  }
  
  export default function ProjectCard({ imgSrc, tool, place, inspiration }: ProjectCardProps) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group bg-amber-50 rounded-2xl w-80 max-w-full aspect-square flex 
            overflow-hidden cursor-pointer
            transition-all duration-500 ease-in-out 
            hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10`}
      >
        {/* 背景圖片 */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 
                      ${isOpen ? "scale-110 blur-sm" : "scale-100"}`}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
  
        {/* 遮罩說明層 */}
        <div className={`absolute inset-0 z-20 flex flex-col justify-center items-center p-6 
                bg-black/60 transition-all duration-500
                ${isOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
                }`}>
          <div className="text-white sm:text-2xl text-xl font-bold font-serif mb-2">
            工具: {tool}
          </div>
          <div className="text-white/90 sm:text-[15px] text-sm font-serif text-center leading-relaxed">
            {place} <br />
            靈感: {inspiration}
          </div>
          {/* 手機版的小提示 */}
          <div className="mt-4 text-white/40 text-[10px] sm:hidden">點擊以關閉</div>
        </div>
  
        {/* 電腦版 Hover 提示 (選配：讓滑鼠移過去時有點回饋) */}
        {!isOpen && (
          <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
        )}
      </div>
    );
  }