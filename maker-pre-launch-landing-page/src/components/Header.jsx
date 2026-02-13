export default  function Header(){
    return(
        <header className="w-screen md:h-145 lg:h-screen space-y-16  text-center grid place-items-center pt-8 md:relative">
            <img className="md:absolute md:top-16 md:left-8 lg:left-42" src="/logo.svg" alt="logo" />
            <div className="w-screen md:absolute z-20 md:top-32 md:mt-10">
                <img className="sm:hidden" src="/illustration-hero-mobile.png" alt="illustration-hero-mobile" />
                <div className="md:h-145 justify-between hidden md:flex bg-[url(/bg-hero-squiggle.svg)] bg-position-[center_0px] bg-size-[600px] bg-no-repeat">
                    <img className="absolute -left-64 lg:-left-10" src="/illustration-hero-left.svg" alt="illustration-hero-left" />
                    <img className="absolute -right-64 lg:-right-10" src="/illustration-hero-right.svg" alt="illustration-hero-right" />
                </div>
            </div>
            <section className="grid place-items-center space-y-7 px-4 md:z-50 md:mt-30 lg:mt-0">
                <h1 className="Text-Preset-1-Mobile text-Neutral-0 Text-Preset-1  max-w-135">Get paid for the work you <span className="text-Cyan animate-pulse">love</span> to do.</h1>
                <p className="text-Blue-Gray-500 Text-Preset-5 max-w-135">The 9-5 grind is so last century. We believe in living life on your own terms.
                    Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                <img className="animate-bounce" src="/icon-scroll.svg" alt="icon-scroll" />
            </section>
        </header>
    )
}