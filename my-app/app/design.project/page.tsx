"use client"

import Menu from "../../components/Menu";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import TextType from '../../components/TextType';
import ProgramCard from "../../components/ProgramCard";
import dynamic from 'next/dynamic';

// 1. 解決 precision 報錯的關鍵：動態匯入並關閉 SSR
const Ballpit = dynamic(() => import("@/components/Ballpit"), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#72e8e2]/80" /> 
});

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
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* 左側選單：電腦版顯示 */}
      <div className="sm:block hidden h-full border-r border-white/10">
        <Menu />
      </div>
      
      {/* 右側主容器 */}
      <div className="relative flex-1 h-full sm:m-2 rounded-2xl overflow-hidden bg-[#72e8e2]/80">
        
        {/* 2. 背景球池層：z-0，不接收任何點擊事件 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Ballpit
            count={80}
            gravity={0.3}
            followCursor={false}
            colors={["#5227FF","#7cff67","#ff6b6b"]}
          />
        </div>

        {/* 3. 內容捲動層：z-10，這層負責處理所有的滑動與點擊 */}
        <div className="relative z-10 w-full h-full overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          {/* 手機版回首頁小圖示 */}
          <Link href="/" className="sm:hidden inline-block mb-4 p-2 text-amber-900 bg-white/20 rounded-full">
            <LuHouse size={20} />
          </Link>
          
          <div className="text-gray-800 text-2xl font-bold font-serif mb-2">
            Programming Project 程式專案
          </div>
          
          <div className="text-gray-800 text-[15px] font-serif leading-relaxed mb-8 max-w-2xl">
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

          {/* 專案展示區 */}
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 pb-24">
            {/* 左側展示 GIF */}
            <div className="bg-amber-50 rounded-3xl h-[300px] sm:h-auto min-h-[400px] w-full row-span-2 bg-[url('/pic1.gif')] bg-cover bg-center shadow-2xl border-4 border-white/30" />

            {/* 生成專案卡片 */}
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
  );
}