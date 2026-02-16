export default function Input({value,placeholder}){
    return(
        <div>
            <label htmlFor="input"></label>
            <input 
                id="input" 
                type="text"
                placeholder={placeholder}
                value={value}
                className="w-full h-11.25 px-4 pb-3  border-b border-Neutral-500 hover:border-b-Blue-500 outline-none  focus:outline-none focus:ring-2 focus:ring-Blue-500 focus:ring-offset-2 focus:ring-offset-white  placeholder:TextPreset4 text-Neutral-500"
                />
        </div>
    )
}