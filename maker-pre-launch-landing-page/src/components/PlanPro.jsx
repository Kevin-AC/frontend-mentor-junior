export default function PlanPro() {
    return (
        <article className="bg-Cyan  w-full md:w-111.25 h-111.25 space-y-6 rounded-lg px-5 md:px-8 pt-16 pb-8 relative">
            <img className="absolute -mt-24" src="src/assets/icon-paid.svg" alt="icon-free" />
            <div className="space-y-4">
                <h2 className="Text-Preset-4 text-Neutral-900">Dive right in</h2>
                <p className="Text-Preset-5 text-Neutral-900 opacity-60">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
            </div>
            <h3 className="Text-Preset-2 text-Neutral-900 flex items-center">$25.00<span className="Text-Preset-5 text-Neutral-900 opacity-60">/mont</span></h3>
            <ul className="text-Neutral-900 Text-Preset-5 space-y-3">
                <li className="flex items-center space-x-2 ">
                    <svg className="fill-current w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>Custom domain</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>Advanced analytics and reports</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>High marketplace visibility</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>5% fee per transaction</p>
                </li>
            </ul>

        </article>
    )
}