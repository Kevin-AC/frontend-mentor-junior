
export default function Checkbox({name,checked,onChange}){
    
    return(
        <div className="w-full flex items-center">
            <label htmlFor="Unidad" className="relative flex items-center justify-center w-9 h-9">
                <input
                    type="checkbox"
                    id="Unidad"
                    checked={checked}
                    onChange={onChange}
                    className="check z-10 peer"
                />
                <span className="absolute inset-0 rounded-full peer-checked:border-none peer-checked:bg-Blue-300 border-Grey-500 pointer-events-none"></span>
            </label>
            <span className="preset-6 ml-3 text-slate-700 select-none">{name}</span>
        </div>
    )
}