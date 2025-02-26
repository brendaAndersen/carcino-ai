'use client'
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/Toggle";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type Doctor = {
    idCarcinocheck: string;
    password: string;
}
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<Doctor>();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
        alert('Estamos em desenvolvimento!')
    }
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
                className={`bg-bg-img bg-cover bg-center flex justify-center items-center 
                    text-center w-screen min-h-[calc(100vh-120px)]`}
            >
                <form className="flex w-64 flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl">Doctor Login</h1>
                    <p className="text-xs text-slate-500">
                        Enter your ID Carcinocheck and password
                        <span className="block">
                            to access Doctor panel.
                        </span>
                    </p>
                    <div className="relative z-0 w-full mb-5 group text-white">
                        <input
                            id="idCarcinocheck"
                            {...register("idCarcinocheck", { required: 'Este campo é obrigatório' })}
                            type="text"
                            name="idCarcinocheck"
                            className="text-black dark:text-white block py-4 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-violet-250 peer font-thin"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="idCarcinocheck"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 text-black dark:text-white"
                        >
                            ID Carcinocheck
                        </label>
                        {errors?.idCarcinocheck && <p>{errors?.idCarcinocheck?.message}</p>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group text-white">
                        <input
                            id="idCarcinocheck"
                            {...register("idCarcinocheck", { required: 'Este campo é obrigatório' })}
                            type="password"
                            name="idCarcinocheck"
                            className="text-black dark:text-white block py-5 px- w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-violet-250 peer font-thin"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute top-1 left-[-10px] text-sm font-bold transform transition-all scale-75 
                            peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-6 
                            peer-focus:scale-85 peer-focus:-translate-y-4 duration-300 text-black dark:text-white"
                        >
                            Password
                        </label>
                        {errors?.password && <p>{errors?.password?.message}</p>}
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white dark:hover:bg-slate-600 rounded-md p-2 dark:bg-slate-700" type="submit">Enviar</button>
                </form>
            </div>
        </>)
}