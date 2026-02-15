export default function TimerCard({ dayNumber,text}){
    return(
        <div className="w-[74px] h-27.5 md:w-26 md:h-[129px] rounded-xl px-3 py-4 bg-Neutral-800 text-Neutral-0 text-center">
            <p className="text-[40px] md:text-[56px] font-bold ">{dayNumber}</p>
            <span className="TextPreset5 text-Neutral-0 opacity-50">{text}</span>
        </div>
    )
}