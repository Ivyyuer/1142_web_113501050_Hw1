import Image from "next/image";
import Link from "next/link";


export default function Home(){
  return(
    <div className="flex h-full">
      {/*左邊*/}
      <div className="bg-white-200 w-[320px] h-full p-4">

        <div className="flex justify-center items-center w-full"></div>
        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
          <Image src="/hiiiiiiii拷貝.png" alt="main" width={80} height={80}/>
        </div>

        <div className="text-center">楊渝媗</div>
        <div>一個熱愛文字、遊戲和音樂的普通人～</div>

        <div className="flex gap-2">
          {/*icons, links*/}
          <div>社群連結</div>
          <div>社群連結</div>
          <div>社群連結</div>
        </div>
        
        

        <Link href="/about">
          <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
        </Link>
        <Link href="/hobby">
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">我的興趣</div>
        </Link>
        
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">遊戲專案</div>
        <div className="bg-gray-300 p-[16px] mt-2 rounded-md">Python專案</div>

        

      </div>
      <div className="bg-white-200 w-full h-full">123</div>
    </div>
  );
}
