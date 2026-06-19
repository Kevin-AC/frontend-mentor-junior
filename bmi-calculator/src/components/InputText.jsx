export default function InputText({ name, UnidadMedida }){
    return(
        <div>
            <span className="Preset-7-Regular text-Grey-500">{name}</span>
            <label htmlFor="Text">
                <input id="Text" type="text"
                        placeholder="0"
                    className="InputText Preset-4 relative" />
                    <span className="Preset-4 text-Blue-500 absolute mt-8 -ml-14">{UnidadMedida}</span>
            </label>
        </div>
    )
}