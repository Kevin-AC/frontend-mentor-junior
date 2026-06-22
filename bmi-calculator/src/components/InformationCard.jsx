export default function InformationCard({ title,result,tip}){
    const hasData = result && result !== "";
    return(
        <aside className=" p-8 bg-Blue-500 text-White rounded-2xl">
            <h2 className={hasData ? "Preset-6":"Preset-4"}>{title}</h2>
            {hasData && <p className="Preset-2">{result}</p>}
            <p className="Preset-7-Regular pt-6">{tip}</p>
        </aside>
    )
}