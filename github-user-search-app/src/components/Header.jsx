export default function Header(){
    return (
        <section className="flex justify-between items-center">
            <img src="public/assets/devfinder-light.svg" alt="devfinder-logo" />
            <div className="flex  gap-4 text-Neutral-200 font-bold tracking-[2.5px] ">
                <p>LIGHT</p>
                <img className="w-5 h-5" src="public/assets/icon-sun.png" alt="icon-sun" />
                <img className="w-5 h-5" src="public/assets/icon-moon.svg" alt="icon-moon.svg" />
            </div>
        </section>
    )
}