export default function MainCard({title,paragragh,img}){
    return(
        <section className="grid place-items-center">
            <img src={img} alt="illustration-passions" />
            <h2 className="Text-Preset-4 text-Neutral-0 pt-8 pb-4">{title}</h2>
            <p className="text-Blue-Gray-500 text-center Text-Preset-5">{paragragh}</p>
        </section>
    )
}