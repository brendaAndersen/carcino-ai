'use client'
import { ThemeToggle } from "@/components/Toggle";
import { ChatAI } from "@/components/ui/ChatAI";
import React, { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <>
    <header className="fixed top-0 left-0 flex items-center justify-between p-5 w-full h-[60px] bg-white dark:bg-slate-950 shadow-md md:pl-64 z-10">
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-center">Welcome!</h1>
      <div className="justify-self-end p-4 ml-auto">
        <ThemeToggle />
      </div>
    </header>


    <div className="flex h-screen overflow-x-hidden">
      <button
        className="md:hidden fixed top-4 left-4 p-2 bg-gray-800 text-white rounded z-20"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 p-2 bg-[#226094] dark:bg-slate-950 text-white transform rounded-r-md ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 z-10`}
      >
        <div className="pt-[60px] md:p-4 lg:p-4">
          <h2 className="text-lg font-semibold">History</h2>
        </div>
    
        <nav className="mt-4">
          <div className="bg-[#236daa] hover:bg-[#337ab4] dark:bg-slate-900 dark:hover:bg-slate-800 cursor-pointer w-full h-[4rem] p-5 rounded-md">
          Fisrt
          </div>
        </nav>
      </div>

      <div className="flex-1 pt-[60px] md:ml-64">
        <div className="grid w-full h-full items-center justify-center bg-[url('https://carcinocheck.com.br/assets/images/banner-bg.jpg')] bg-cover bg-center dark:bg-slate-900 dark:bg-none">
          <ChatAI />
        </div>
      </div>
    </div>
    </>
  );
}
