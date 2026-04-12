"use client"
import Image from "next/image";
import Menu from "../component/Menu"
import Link from "next/link";
import { LuHouse} from "react-icons/lu";


export default function About(){
  return (
    <>
      <div className="flex h-full">
        
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-amber-950 w-full">
          <div className="w-full p-4">
            <Link href="/" className="sm:hidden text-amber-100">
          
              <LuHouse />
        
            </Link>
            <div className="text-[#F4EBDD] font-serif font-extrabold sm:text-[35px] text-[25px] p-5">
              關於我的一些小事 About me
            </div>
            
          

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 p-5 max-w-7xl mx-auto w-full">
            <div className="w-full flex justify-center order-1 sm:order-2">
              <div className="bg-[#594228] p-3 shadow-2xl rounded-lg w-fit max-w-full sm:h-[600px] h-[400px]">
                <Image
                  src="/pro1.jpg"
                  alt="楊渝媗的照片"
                  width={380}
                  height={500}
                  
                  className="object-cover rounded w-[250px] sm:w-[380px] h-auto"
                />
              </div>
            </div>
              
              {/* 文字內容 */}
              <div className="leading-relaxed text-[#F4EBDD] text-[15px]">
                  {/* 中文簡介 */}
                  <p className="font-serif">
                    嗨你好~我是楊渝媗,目前就讀政治大學英文系大二,雙主修數位內容,輔心理系。個性主動負責、喜歡嘗試新事物,特別對遊戲與軟體開發領域充滿熱情,並持續跨域學習相關技能與AI工具應用。
                    <br /><br />
                    過去曾擔任高中英語旅行社社長,負責社團營運、活動規劃與對外溝通,也和團隊一起經營社群內容,提升活動曝光與參與度,培養了帶領團隊與解決問題的能力。進入大學後,我參與英文之夜劇場製作,兼任行政與演員,在短時間內協調分工、調整劇本與安排排練,累積專案執行與應變經驗。同時也在數位行銷實驗室擔任FB行銷組組長,從零開始自學行銷知識並實際操作專案,逐步建立內容與企劃能力。
                    <br /><br />
                    在興趣方面,我熱愛遊戲,並在課程中使用 Unreal Engine 與團隊完成第一款3D小遊戲。從無到有打造角色與互動機制的過程,讓我深刻感受到把想法變成作品的成就感,也萌生了未來想投入遊戲相關產業的想法。我期待自己能接下來的課程及活動中接觸實務經驗、快速學習並為團隊創造價值,同時持續精進跨領域整合與問題解決能力。
                    英文專業不僅是我的技能之一，更是前進未知領域的基地，讓我在數位內容的軟體和心理學課程中學習地更加順遂。我相信，每一次的學習與挑戰，都是一場新的冒險，而我將持續向前，探索更多可能性，拓展自己的視野。
                  </p>
                  <div className="mt-5"></div>

                  {/* 英文簡介 */}
                  <p className="font-serif">
                    Hi, I’m Yu-Syuan (Ivy) Yang, a sophomore at National Chengchi University majoring in English, with a double major in Digital Content and a minor in Psychology. I am a proactive and responsible person who loves trying new things. I have a deep passion for game and software development, and I am constantly teaching myself cross-disciplinary skills and the latest AI tools.
                    <br /><br />
                    In high school, I served as the President of the English Travel Club, where I managed club operations, planned events, and handled external communications. My team and I also managed social media content to boost visibility, which helped me develop leadership and problem-solving skills. In university, I took on roles as both an administrator and an actress in the 'English Night' theater production, where I coordinated tasks and adjusted scripts under tight deadlines. Currently, I am the FB Marketing Team Lead at the Digital Marketing Lab, where I’ve self-taught marketing strategies from scratch to build my content planning and project execution skills.
                    <br /><br />
                    Beyond my studies, I am a gaming enthusiast. I recently collaborated with a team to develop our first 3D mini-game using Unreal Engine. The process of creating characters and interaction mechanics from zero gave me a huge sense of achievement and sparked my desire to pursue a career in the gaming industry. My English background serves as a solid foundation, allowing me to navigate software documentation and psychology theories more smoothly. To me, every challenge is a new adventure, and I am eager to gain practical experience and create value for a team while expanding my horizons.
                  </p>
              </div>

              

            
                

              </div>
            </div>

    
          </div>
        </div>
        
      
    </>
  );
}
