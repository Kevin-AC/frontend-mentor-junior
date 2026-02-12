
export default function PricingPlans({children}){
    return (
        <section className="space-y-20 flex flex-col items-center">
            <div className="space-y-6 text-center md:w-135">
                <h2 className="Text-Preset-1-Mobile text-Neutral-0">Our pricing plans</h2>
                <p className="Text-Preset-5 text-Blue-Gray-500">We only make money when our creators make money.
                    Our plans are always affordable, and it’s completely free to get started.</p>
            </div>
            <div className="space-y-20 lg:space-y-0 lg:flex lg:items-center  lg:gap-8">
                {children}
            </div>
        </section>
    )
}