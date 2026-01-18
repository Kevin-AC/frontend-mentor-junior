import { useEffect,useState } from "react"
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
            <img src="public/assets/devfinder-light.svg" alt="devfinder-logo" />
            <button className="flex gap-4 text-Neutral-200 font-bold tracking-[2.5px] cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
            >
                <p className="hidden dark:block">LIGHT</p>
                <p className="dark:hidden">DARK</p>
                <img className="w-5 h-5 hidden dark:block" src="public/assets/icon-sun.png" alt="icon-sun" />
                <img className="w-5 h-5 dark:hidden" src="public/assets/icon-moon.svg" alt="icon-moon.svg" />
            </button>
        </section>
    )
}