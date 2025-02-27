'use client'
import { Header } from "@/components/header";
import Layout from "@/components/layout";
import { ThemeToggle } from "@/components/Toggle";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <Layout>
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
            <div
                className={`bg-banner dark:bg-none bg-cover bg-center h-[500px]
                flex items-center w-screen 
                min-h-[calc(100vh-150px)]
                justify-start dark:justify-center
                text-left dark:text-center pl-20 dark:pl-0`}
            >
                <div className="pt-10 max-w-3xl">
                    <h4 className="animate-slide-down">
                        <span className="animate-slide-down text-sm dark:text-slate-500 text-slate-600">
                            Caring for better life
                        </span>
                    </h4>
                    <h1 className="text-5xl font-bold leading-tight ">
                        <span className="animate-slide-down block">Leading the way in</span>
                        <span className="animate-slide-down block">oncology medical</span>
                        <span className="animate-slide-down block">excellence</span>
                    </h1>

                    <div className="animate-slide-down text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-lg space-y-4 text-justify dark:text-justify">
                        <p>
                            Pipac Brazil&apos;s patient management system for oncology is a comprehensive software solution designed to streamline and enhance the care of oncology patients.
                        </p>
                        <p>
                            Pipac Brazil is an innovative startup focused on providing patient management solutions for oncology. Our system helps streamline and enhance patient care.
                            With a commitment to medical excellence and technological innovation, we are leading the way to a better future in oncology care management.
                        </p>
                    </div>
                </div>
            </div >
            <div className="bottom-14 left-2 flex justify-end p-4">
                <div className="rounded-3xl border-2 border-slate-300 w-10 h-10 hover:scale-125 hover:cursor-pointer flex items-center justify-center">
                    <FaRobot className="w-7 h-7" onClick={() => router.push("/ai")} />
                </div>
            </div>


        </Layout>
    )
}