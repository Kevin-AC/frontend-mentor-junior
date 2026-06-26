import { useState } from "react";
import Checkbox from "./Checkbox";
import InformationCard from "./InformationCard";
import InputText from "./InputText";


export default function Card(){
    const [system, setSystem]=useState("metric")

    const [height,setHeight]=useState(0)
    const [weight, setWeight]=useState(0)

    // Estados Imperiales
    const [ft,setFt]=useState(0);
    const [inVal,setInVal]= useState(0)
    const [st,setSt]=useState(0);
    const [lbs,setLbs]=useState(0);

    let bmiResult=0;
    let minWeight=0;
    let maxWeight=0;

    if(system === "metric"){
        //calculo en sistema metrico
        if (height > 0 && weight > 0) {
            const heightInMeter = height / 100;
            bmiResult = weight / (heightInMeter * heightInMeter)
            minWeight = 18.5 * (heightInMeter * heightInMeter)
            maxWeight = 24.9 * (heightInMeter * heightInMeter)
        }
    }else{
        //calculo para imperial
        const totalInches = (Number(ft) * 12) + Number(inVal);
        const totalLbs = (Number(st) * 14) + Number(lbs);

        if (totalInches > 0 && totalLbs > 0) {
           
            bmiResult = (totalLbs / (totalInches * totalInches)) * 703;

           
            const heightInMeter = (totalInches * 2.54) / 100;
            minWeight = 18.5 * (heightInMeter * heightInMeter);
            maxWeight = 24.9 * (heightInMeter * heightInMeter);
        }
    }
    const kgToStoneLbs = (kg) => {
        // 1 kg = 2.20462 lbs
        const totalLbs = kg * 2.20462;
        // 1 stone = 14 lbs
        const stones = Math.floor(totalLbs / 14);
        const lbs = Math.round(totalLbs % 14);

        return `${stones}st ${lbs}lbs`;
    };
    const getBmiMessage = () => {
        if (bmiResult === 0) return "Enter your height and weight and you’ll see your BMI result here.";

        if(system === "metric"){
            return (
                <>
                    Your BMI suggests you’re a healthy weight.
                    Your ideal weight is between <strong>{minWeight.toFixed(1)}kgs - {maxWeight.toFixed(1)}kgs</strong>.
                </>
            );
        }
        const minWeightImperial = kgToStoneLbs(minWeight);
        const maxWeightImperial = kgToStoneLbs(maxWeight);

        return (
            <>
                Your BMI suggests you’re a <strong>healthy weight</strong>.
                Your ideal weight is between <strong>{minWeightImperial} - {maxWeightImperial}</strong>.
            </>
        );

    };

    return(
        <article className="bg-White w-full text-left p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 ">
            <h3 className="preset-4">Enter your details below</h3>
            <div className="flex gap-6 ">
                <Checkbox name={"Metric"} checked={system === "metric"}
                    onChange={() => setSystem("metric")} />
                <Checkbox name={"Imperial"} checked={system === "imperial"}
                    onChange={() => setSystem("imperial")} />
            </div>
            <div className="space-y-4">


               {system === "metric" ? (
                    <div className="sm:flex gap-6">
                        <InputText 
                            name={"Height"} 
                            UnidadMedida={"cm"} 
                            value={height} 
                            onChange={(e) => setHeight(e.target.value)}/>
                        <InputText 
                            name={"Weight"} 
                            UnidadMedida={"kg"} 
                            value={weight} 
                            onChange={(e)=> setWeight (e.target.value)}/>
                    </div>

                ) : (//renderizado condicional para imperial
                <>
                            <div className="flex gap-4">
                                <InputText
                                    value={ft}
                                    name={"Height"}
                                    UnidadMedida={"ft"}
                                    onChange={(e) => setFt(e.target.value)}
                                />
                                <InputText
                                    value={inVal}
                                    UnidadMedida={"in"}
                                    onChange={(e) => setInVal(e.target.value)}
                                />


                            </div>
                            <div className="flex gap-4">
                                <InputText
                                    value={st}
                                    name={"Weight"}
                                    UnidadMedida={"st"}
                                    onChange={(e) => setSt(e.target.value)}
                                />

                                <InputText
                                    value={lbs}
                                    UnidadMedida={"lbs"}
                                    onChange={(e) => setLbs(e.target.value)}
                                />


                            </div>
                
                </>
                )}

                
               
            </div>
            <InformationCard 
                title={bmiResult ? "Your BMI is..." : "Welcome!"}
                result={bmiResult ? bmiResult.toFixed(1) : ""}
                tip={getBmiMessage()}
                />
        </article>
    )
}