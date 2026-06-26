export default function TipsCard({imgUrl,title,text}){
    return(
        <article className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start gap-8 sm:gap-12">
            <picture className="sm:w-16 sm:h-16 shrink-0 sm:flex sm:items-center justify-center ">
                <img src={imgUrl} alt={title} />
            </picture>
            <div className="space-y-6">
                <h3 className="preset-4 text-Blue-900">{title}</h3>
                <p className="preset-6-Regular text-Grey-500">{text}</p>
            </div>
        </article>
    )
}