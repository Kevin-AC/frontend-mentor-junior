import Formulario from './Components/Formulario.jsx'
import Timer from './Components/Timer.jsx'
import TimerCard from './Components/TimerCard'
import { useNavigate } from 'react-router-dom'
export default function SignUp(){
    const navigate = useNavigate()
    return(
        <>
            <header className='mt-10 mb-16 bg-Neutral-50 absolute top-0 left-0 right-0 z-50 lg:w-80 '>
                    <img onClick={() => navigate('/')} className="mx-auto md:ml-10 lg:ml-96 w-32 md:w-40 cursor-pointer" src="/assets/shared/logo.svg" alt="logo" />
            </header>
            <main className='w-screen min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-40  lg:px-0 pb-12 relative'>
                <div className='flex flex-col lg:flex-row w-full md:items-center lg:w-3/4 justify-between  bg-Neutral-50 '>
                    <section className='w-full h-full z-20 text-center flex flex-col items-center mb-20 lg:mb-0'>
                        <div className='pb-12 max-w-[540px]'>
                            <h1 className='TextPreset1Tablet  text-Neutral-900'>Work smarter. Save time.</h1>
                            <p className='TextPreset3 text-Neutral-500 md:pt-8'>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
                        </div>
                        <Timer style={'text-Neutral-900'}>
                            <TimerCard text='days' dayNumber='47' style={'bg-Blue-100 text-Blue-500'} styleSpan={'text-Neutral-800'} />
                            <TimerCard text='hours' dayNumber='07' style={'bg-Blue-100 text-Blue-500'} styleSpan={'text-Neutral-800'} />
                            <TimerCard text='min' dayNumber='56' style={'bg-Blue-100 text-Blue-500'} styleSpan={'text-Neutral-800'} />
                            <TimerCard text='sec' dayNumber='14' style={'bg-Blue-100 text-Blue-500'} styleSpan={'text-Neutral-800'} />
                        </Timer>
                    </section>
                    <section className='w-full md:w-[445px] z-20 '>
                        <Formulario />
                    </section>
                </div> 
                <div className='w-full h-[376px] md:h-[473px] lg:w-[420px] lg:h-screen absolute bg-Neutral-900 bottom-0 lg:right-0 z-10 bg-[url(/assets/home/bg-pattern-footer.svg)] bg-center  bg-cover bg-no-repeat'></div>
            </main>
        </>
    )
}