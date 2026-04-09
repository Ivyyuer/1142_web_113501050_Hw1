import Image from "next/image";



export default function ProgrammingProject(){
  let projectdata ={
    "css":{
      "projectname":""
    },

    "1":{
      "name":"Thorns and Roses 玫瑰與荊棘",
      "description":"unreal engine 遊戲專案",
      "imageurl":"/gamehome.png",
    },

    "2":{
      "name":"今天去哪chill?",
      "description":"python 專案",
      "imageurl":"",
    },




  };









  return(
    <>
    <div className="bg-gray-800 h-full w-full rounded-2xl p-4 leading-10">
        <div className="text-white text-2xl font-bold justify-center items-center">Programming Project 程式專案</div>
        <div className="text-white text-[15px] justify-center items-center">這裡是我的程式專案足跡~</div>
          <div className="bg-gray-800 rounded-2xl grid grid-cols-3  gap-2">

            <div className="bg-amber-50 rounded-2xl h-full w-full flex justify-center items-center row-span-2
                              bg-[url('/pic1.gif')] bg-cover bg-center">
              
            </div>


            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center col-span-2 
              bg-cover bg-center"
              style={{backgroundImage: `url(${projectdata["1"]["imageurl"]})`}}>
                

              <div className="text-black text-2xl font-bold bg-amber-50/50 w-full h-[80px] p-4 flex justify-center items-center">
                {projectdata["1"]["name"]}

              </div>
              <div className="text-black text-2xl font-bold bg-amber-50/50 w-full h-[80px] p-4 flex justify-center items-center">
              {projectdata["1"]["description"]}
                
              </div>

            </div>

            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">
              <div className="text-black text-2xl font-bold bg-amber-50/50 w-full h-[80px] p-4 flex justify-center items-center">
                {projectdata["2"]["name"]}
              </div>
              
            </div>
            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">程式專案4</div>
            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">程式專案5</div>
            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">程式專案6</div>
            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">程式專案7</div>
            <div className="bg-amber-50 rounded-2xl h-50 flex justify-center items-center">程式專案8</div>
          </div> 

    </div>
    </>
  );
}
