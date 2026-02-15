export default function TimerCard({ dayNumber,text}){
    return(
        <div className="w-18.5 h-27.5 rounded-xl px-3 py-4 bg-Neutral-500 text-Neutral-0 text-center">
            <p className="TextPreset1Tablet">{dayNumber}</p>
            <span className="TextPreset5 text-Neutral-0 opacity-50">{text}</span>
        </div>
    )
}