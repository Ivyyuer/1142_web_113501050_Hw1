import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function RainingDayPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#7FB77E] p-4">
      {/* 返回按鈕 */}
      <div className="w-full max-w-5xl mb-4">
        <Link 
          href="/programming-project" 
          className="inline-flex items-center gap-2 text-gray-800 font-bold bg-amber-50 px-4 py-2 rounded-xl shadow hover:bg-amber-100 transition"
        >
          <LuArrowLeft /> 返回專案列表
        </Link>
      </div>

      {/* 遊戲標題 */}
      <h1 className="text-2xl font-bold font-serif text-gray-800 mb-2">
        Raining Day
      </h1>

      {/* Unity 遊戲嵌入框：給它固定的高度比例（例如 aspect-video 或 h-[60vh]），而不是 h-full */}
      <div className="w-full max-w-5xl h-[69vh] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-50">
        <iframe 
          src="/unity-game/RainingDay/index.html" 
          className="w-full h-full border-0 block"
          title="Raining Day"
        />
      </div>

      {/* 放在 iframe 下方的文字區塊 */}
      <div className="w-full max-w-5xl mt-4 bg-amber-50/80 rounded-xl p-4 text-gray-800 shadow">
        <h2 className="font-bold text-lg mb-1">作品說明</h2>
        <h1 className="text-sm leading-relaxed font-sans">
          This is a day with good weather.<br />
          Yes, I mean it.<br />
          ✧ (๑ ´ ▿`๑) ☂<br />
        </h1>
        <p className="text-sm leading-relaxed font-sans">
          這是使用 Unity 製作的 3D 專案。如果畫面無法正常操作，請點擊遊戲畫面內部以播放內容。
        </p>
      </div>
    </div>
  );
}