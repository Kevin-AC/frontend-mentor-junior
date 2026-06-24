export default function LimitatiosBmiCard({title,imgUrl,text}){
    return(
        <article className="p-6 sm:p-8 rounded-2xl bg-White Shadow">
            <div className="w-69.75 flex flex-col gap-4">
                <picture className="flex gap-4">
                    <img src={imgUrl} alt={title} />
                    <span className="Preset-5 text-Blue-900">{title}</span>
                </picture>
                <p className="Preset-6-Regular text-Grey-500">{text}</p>
            </div>
        </article>
    )
}