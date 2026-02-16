export default function Button({text,style,onclick}){
    return(
        <button
            type="button"
            className={`w-42.5 h-12.5 rounded-full TextPreset5 ${style}`}
            onClick={onclick}
        >{text}</button>
    )
}