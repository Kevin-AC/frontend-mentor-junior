import Button from './Button'
export default function Hero(){
    return(
        <section className='py-20 flex items-center gap-10 flex-col md:px-10 md:flex-row-reverse '>
            <img className='w-70 lg:w-auto'  src="/assets/home/illustration-charts.svg" alt="illustration-charts" />
            <div className='text-center md:text-left space-y-4 w-[343px] '>
                <h1 className='TextPreset1Tablet text-Neutral-900'>A simple solution to complex tasks is coming soon</h1>
                <p className='TextPreset4 text-Neutral-500'>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>
                <Button text='Get Started' style='buttonPrimary shadow-2xl '/>
            </div>
        </section>
    )
}