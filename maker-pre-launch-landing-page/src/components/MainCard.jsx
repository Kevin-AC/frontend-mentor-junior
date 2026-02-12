export default function MainCard({ title, paragragh, img}){
    return(
        <section className="lg:w-64 md:odd:pl-18 lg:odd:pl-0 lg:odd:pt-12 flex flex-wrap justify-center lg:justify-start md:gap-12 lg:gap-0">
            <div className="w-32 h-32 bg-Blue-800 rounded-2xl grid place-items-center">
                <img src={img} alt="illustration-passions" />
            </div>
            <div className="md:w-86 text-center md:text-left">
                <h2 className="Text-Preset-4 text-Neutral-0 pt-8 pb-4">{title}</h2>
                <p className="text-Blue-Gray-500 Text-Preset-5">{paragragh}</p>
            </div>
        </section>
    )
}