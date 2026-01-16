export default function Search(){
    return(
       <section className="flex items-center relative">
            <img className="absolute pl-3 "
                src="/assets/icon-search.svg" 
                alt="icon-search" />
            <input className="w-full h-16.5 pl-12 text-Neutral-100 bg-Neutral-800 rounded-2xl placeholder:text-[13px]/[1.4] placeholder:opacity-70 placeholder:leading-35   placeholder:text-Neutral-100  " 
                type="text"
                placeholder="Search GitHub username…" />
            <button className="absolute right-3 w-24 h-12 bg-Blue-500 rounded-xl px-5 py-3 text-Neutral-0 font-bold">Search</button>

       </section>
    )
}