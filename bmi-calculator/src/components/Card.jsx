import Checkbox from "./Checkbox";

export default function Card(){
    return(
        <article className="bg-White w-82 h-[665px] text-left p-6 rounded-2xl shadow ">
            <h3 className="Preset-4">Enter your details below</h3>
            <div className="pt-6 flex gap-9">
                <Checkbox name={"Metric"}/>
                <Checkbox name={"Imperial"} />
            </div>
        </article>
    )
}