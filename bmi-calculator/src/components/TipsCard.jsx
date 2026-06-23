export default function TipsCard({imgUrl,title,text}){
    return(
        <article className="flex flex-col gap-8">
            <picture>
                <img src={imgUrl} alt={title} />
            </picture>
            <div className="space-y-6">
                <h3 className="Preset-4 text-Blue-900">{title}</h3>
                <p className="Preset-6-Regular text-Grey-500">{text}</p>
            </div>
        </article>
    )
}