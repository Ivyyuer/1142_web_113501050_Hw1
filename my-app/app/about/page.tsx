"use client"
import Image from "next/image";
import Menu from "../component/Menu"


export default function About(){
  return (
    <>
      <div className="flex h-full">
        <link href="/" /> 
        <div className="sm:block hidden">
          <Menu />
        </div>
      </div>
      <div>
        About 關於我
      </div>
    </>
  );
}
