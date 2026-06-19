import { useState } from "react"

export default function Checkbox({name}){
    const [isChecked,setIsChecked]=useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return(
        <div className="flex items-center">
            <label htmlFor="Unidad" className="relative flex items-center justify-center w-8 h-8">
                <input
                    type="checkbox"
                    id="Unidad"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="Check z-10 peer"
                />
                <span className="absolute inset-0 rounded-full peer-checked:border-none peer-checked:bg-Blue-300 border-Grey-500 pointer-events-none"></span>
            </label>
            <span className="Preset-6 ml-3 text-slate-700 select-none">{name}</span>
        </div>
    )
}