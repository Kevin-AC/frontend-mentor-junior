
export default function Card({type,price,description,profit1,profit2,profit3,children}){
    return(
        <article className={`w-85.75 h-124.75 px-8 py-12 space-y-12 rounded-xl text-center 
               ${type === 'Pro' ? 'bg-Blue-500 text-Neutral-0' : 'bg-Neutral-0 text-Neutral-900'}`}>
            <div className="space-y-4">
                <h2 className="TextPreset2">{type}</h2>
                <p className="TextPreset1">{price}</p>
                <span className="TextPreset4">{description}</span>
            </div>
            <ul className="TextPreset4 space-y-4">
                <li>{profit1}</li>
                <li>{profit2}</li>
                <li>{profit3}</li>
            </ul>
            {children}
        </article>
    )
}