'use client'
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/Toggle";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Header>
                <nav className="flex gap-5 w-full justify-center">
                    <Link className="pt-2 hover:border-blue-700 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-blue-800 dark:hover:text-slate-500" href="/">Home</Link>
                    <Link className="pt-2 hover:border-blue-700 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-blue-800 dark:hover:text-slate-500" href="/login">Doctor Login</Link>
                    <Link className="pt-2 hover:border-blue-700 dark:hover:border-gray-600 hover:border-b-2 border-dotted hover:text-blue-800 dark:hover:text-slate-500" href="/patient-login">Patient Login</Link>
                    <Link className="text-white bg-blue-600 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md p-2" href="/doctor-register">Doctor Register</Link>
                </nav>
                <div className="justify-self-end p-4 ml-auto">
                    <ThemeToggle />
                </div>
            </Header>
            <div
                className={`bg-bg-img bg-cover bg-center flex justify-center items-center text-center w-screen min-h-[calc(100vh-120px)]`}>
                <div className="pt-10 text-left">
                    <span className="text-sm text-slate-500">
                        Caring for better life
                    </span>
                    <h1 className="text-2xl">
                        Leading the way in oncology medical excellence
                    </h1>
                    <div className="text-sm text-justify text-slate-400 leading-relaxed max-w-3xl mx-auto space-y-4">
                        <p>
                            Pipac Brazils patient management system for oncology is a comprehensive software solution designed to streamline and enhance the care of oncology patients.
                        </p>
                        <p>
                            Pipac Brazil is an innovative startup focused on providing patient management solutions for oncology. Our system helps streamline and enhance patient care.
                            With a commitment to medical excellence and technological innovation, we are leading the way to a better future in oncology care management.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}