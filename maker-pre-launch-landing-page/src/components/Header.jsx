export default  function Header(){
    return(
        <header className="space-y-16 text-center grid place-items-center pt-8">
            <img src="src/assets/logo.svg" alt="logo" />
            <div>
                <img className="" src="src/assets/illustration-hero-mobile.png" alt="illustration-hero-mobile" />
            </div>
            <section className="grid place-items-center space-y-7 px-4">
                <h1 className="Text-Preset-1-Mobile text-Neutral-0">Get paid for the work you <span className="text-Cyan">love</span> to do.</h1>
                <p className="text-Blue-Gray-500 Text-Preset-5">The 9-5 grind is so last century. We believe in living life on your own terms.
                    Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                <img src="src/assets/icon-scroll.svg" alt="icon-scroll" />
            </section>
        </header>
    )
}