export default function Button({text,style}){
    return(
        <button
            type="button"
            className={`w-42.5 h-12.5 rounded-full TextPreset5 ${style}`}
        >{text}</button>
    )
}