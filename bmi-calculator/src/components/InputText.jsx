export default function InputText({ name, UnidadMedida,value,onChange }){
    
    return(
        <div className="w-full">
            {name ? (
                <span className="preset-7-Regular text-Grey-500 mb-2 block">
                    {name}
                </span>
            ) : (
                <span className="preset-7-Regular mb-2 block invisible" aria-hidden="true">
                    &nbsp;
                </span>
            )}
            <label htmlFor="Text" className="relative block w-full">
                <input id="Text" type="text"
                        placeholder="0"
                        className="inputText preset-4 relative w-full" 
                        value={value}
                        onChange={onChange}
                    
                    />
                <span className="preset-4 text-Blue-500 absolute mt-8 -ml-14">{UnidadMedida}</span>
            </label>
        </div>
    )
}