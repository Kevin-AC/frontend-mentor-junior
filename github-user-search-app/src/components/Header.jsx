import { useEffect,useState } from "react"
import { MoonIcon, SunIcon } from "./icons"

export default function Header(){
    const [darkMode,setDarkMode]=useState(false)
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])
    return (
        <section className="flex justify-between items-center">
            <img className="hidden dark:block" src="/assets/devfinder-light.svg" alt="devfinder-light-logo" />
            <img className="dark:hidden" src="/assets/devfinder.svg" alt="devfinder-logo" />
            <button className="flex Focus rounded-sm gap-4 text-Neutral-200 hover:text-Neutral-900 dark:hover:text-Neutral-0 font-bold tracking-[2.5px] cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
            >
                <p className="hidden dark:block  ">LIGHT</p>
                <p className="dark:hidden ">DARK</p>
                <SunIcon className="w-5 h-5 hidden dark:block fill-current" />
                <MoonIcon className="w-5 h-5 dark:hidden fill-current" />
            </button>
        </section>
    )
}