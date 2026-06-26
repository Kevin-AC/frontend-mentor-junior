export default function LimitatiosBmiCard({title,imgUrl,text}){
    return(
        <article className="h-full p-6 sm:p-6 lg:p-8 rounded-2xl bg-White sshadow">
            <div className="w-69.75 lg:w-full flex flex-col gap-4">
                <picture className="flex gap-4">
                    <img src={imgUrl} alt={title} />
                    <span className="preset-5 text-Blue-900">{title}</span>
                </picture>
                <p className="preset-6-Regular text-Grey-500">{text}</p>
            </div>
        </article>
    )
}