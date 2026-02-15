
export default function Card({type,price,description,profit1,profit2,profit3,children}){
    return(
        <article className={`w-[343px] md:w-[689px] md:h-[315px] lg:w-[343px] lg:h-124.75 h-124.75  px-8 py-12 md:p-12  space-y-12 md:space-y-0 rounded-xl text-center shadow-2xl md:flex lg:flex-col md:justify-between md:items-center 
               ${type === 'Pro' ? 'bg-Blue-500 text-Neutral-0' : 'bg-Neutral-0 text-Neutral-900'}`}>
            <div className="space-y-2">
                <h2 className="TextPreset2">{type}</h2>
                <p className="TextPreset1">{price}</p>
                <span className="TextPreset4">{description}</span>
                <div className="mt-5 hidden md:block lg:hidden">
                    {children}
                </div>
            </div>
            <ul className="TextPreset4 space-y-4">
                <li>{profit1}</li>
                <li>{profit2}</li>
                <li>{profit3}</li>
            </ul>
            <div className="md:hidden lg:block">
                {children}
            </div>
        </article>
    )
}