import { useState } from "react"
export default function SelecInput(){
    const [plan,setPlan] = useState('Basic')
    const handleChange =(e)=>{
        const value = e.target.value;
        setPlan(value)
        
    }
    return(
        <div className="flex relative">
            <select name="Basic Pack" id=""
                onChange={handleChange}
                className="w-90 h-11.25 pl-36 px-4 pb-2 border-b appearance-none bgIconArrow border-Neutral-500  outline-none text-Neutral-500 TextPreset5"
            >
                <option value="Basic">Free</option>
                <option value="Pro">$9,99</option>
                <option value="Ultimate">$19,99</option>
            </select>
            <p className="absolute left-4 top-1.25 TextPreset5 text-Neutral-900">{`${plan} Pack`}</p>
        </div>
    )
}