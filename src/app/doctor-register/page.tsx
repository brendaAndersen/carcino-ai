'use client'
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/Toggle";
import Link from "next/link";
import { LuPickaxe } from "react-icons/lu";

export default function Login() {
    return (<>
        <Header>
            <nav className="flex gap-5 w-full justify-center">
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/">Home</Link>
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/login">Doctor Login</Link>
                <Link className="pt-2 hover:border-slate-300 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-slate-100 text-slate-300 dark:hover:text-slate-500" href="/patient-login">Patient Login</Link>
                <Link className="text-white bg-blue-700 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md p-2" href="/doctor-register">Doctor Register</Link>
            </nav>
            <div className="justify-self-end p-4 ml-auto">
                <ThemeToggle />
            </div>
        </Header>
        <div className="animate-slide-down bg-banner dark:bg-none bg-cover bg-center flex justify-center items-center 
                    text-center w-screen min-h-[calc(100vh-90px)]">
            <h1>Em desenvolvimento</h1>
            <LuPickaxe />
        </div>
    </>)

}