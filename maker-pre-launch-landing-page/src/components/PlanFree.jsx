export default function PlanFree() {
    return (
        <article className="bg-Blue-800  w-full h-102.25 space-y-6 rounded-lg px-5 pt-12 pb-8 relative">
            <img className="absolute -mt-18" src="src/assets/icon-free.svg" alt="icon-free" />
            <div className="space-y-4">
                <h2 className="Text-Preset-4 text-Neutral-0">Dip your toe</h2>
                <p className="Text-Preset-5 text-Neutral-0 opacity-60">Just getting started? No problem at all! Our free plan will take you a long way.</p>
            </div>
            <h3 className="Text-Preset-2 text-Neutral-0">Free</h3>
            <ul className="text-Neutral-0 Text-Preset-5 space-y-3">
                <li className="flex items-center space-x-2">
                    <svg className="fill-current text-Cyan  w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>Unlimited products</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current text-Cyan w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>Basic analytics</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current text-Cyan w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>Limited marketplace exposure</p>
                </li>
                <li className="flex items-center space-x-2">
                    <svg className="fill-current text-Cyan w-3 h-3" viewBox="0 0 12 9">
                        <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
                    </svg>
                    <p>10% fee per transaction</p>
                </li>
            </ul>

        </article>
    )
}