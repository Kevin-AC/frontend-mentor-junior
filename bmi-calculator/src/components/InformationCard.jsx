export default function InformationCard({ title,result,tip}){
    const hasData = result && result !== "";
    return(
        <aside className={hasData ? "p-8 bg-Blue-500 text-White rounded-2xl sm:rounded-r-full sm:flex sm:justify-between gap-6" : "p-8 bg-Blue-500 text-White rounded-2xl sm:rounded-r-full"}>
            <div>
                <h2 className={hasData ? "preset-6-Regular" : "preset-4"}>{title}</h2>
                {hasData && <p className="preset-1">{result}</p>}
            </div>
            <p className="sm:max-w-66 lg:max-w-52 preset-7-Regular pt-6">{tip}</p>
        </aside>
    )
}