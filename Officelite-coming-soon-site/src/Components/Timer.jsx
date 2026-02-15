import Button from './Button'
import TimerCard from './TimerCard'
export default function Timer(){
    return(
        <section className='space-y-5 '>
            <h2 className='TextPreset6 text-Neutral-0 uppercase text-center'>Coming <span className='text-Blue-500'>4 Nov 2020</span></h2>
            <div className='flex gap-4'>
                <TimerCard text='days' dayNumber='47' />
                <TimerCard text='hours' dayNumber='07' />
                <TimerCard text='min' dayNumber='56' />
                <TimerCard text='sec' dayNumber='14' />
            </div>
        </section>
    )
}