import { useState } from "react"

export default function Search({getUser}){
    const [searchUser,setSearchUser]=useState("");

    const handleChange = (e)=>{
        setSearchUser(e.target.value);
    }
    const handleSearch = () => {
        getUser(searchUser)
    }
    return(
       <section className="flex items-center relative">
            <img className="absolute pl-3 "
                src="/assets/icon-search.svg" 
                alt="icon-search" />
            <input className="w-full h-16.5 pl-12 dark:text-Neutral-100 text-Neutral-700 dark:bg-Neutral-800 bg-Neutral-0 rounded-2xl placeholder:text-[13px]/[1.4] placeholder:opacity-70 placeholder:leading-35 placeholder:text-shadow-Neutral-500 placeholder:dark:text-Neutral-100   " 
                type="text"
                placeholder="Search GitHub username…"
                value={searchUser}
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
            <button className="absolute right-3 w-24 h-12 bg-Blue-500 rounded-xl px-5 py-3 text-Neutral-0 font-bold"
                onClick={handleSearch}
            >Search</button>

       </section>
    )
}