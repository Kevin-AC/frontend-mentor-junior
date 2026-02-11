
export default function PricingPlans({children}){
    return (
        <section className="space-y-20">
            <div className="space-y-6 text-center">
                <h2 className="Text-Preset-1-Mobile text-Neutral-0">Our pricing plans</h2>
                <p className="Text-Preset-5 text-Blue-Gray-500">We only make money when our creators make money.
                    Our plans are always affordable, and it’s completely free to get started.</p>
            </div>
            <div className="space-y-20">
                {children}
               
            </div>
        </section>
    )
}