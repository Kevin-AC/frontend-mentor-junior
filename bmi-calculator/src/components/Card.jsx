import Checkbox from "./Checkbox";
import InformationCard from "./InformationCard";
import InputText from "./InputText";

export default function Card(){
    return(
        <article className="bg-White w-[328px] text-left p-6 rounded-2xl shadow space-y-6 ">
            <h3 className="Preset-4">Enter your details below</h3>
            <div className="flex gap-9">
                <Checkbox name={"Metric"}/>
                <Checkbox name={"Imperial"} />
            </div>
            <div className="space-y-4">
                <InputText name={"Height"} UnidadMedida={"cm"} />
                <InputText name={"Weight"} UnidadMedida={"kg"} />
            </div>
            <InformationCard/>
        </article>
    )
}