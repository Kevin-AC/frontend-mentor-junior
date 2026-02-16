
export default function Timer({style,children}){
    return(
        <section className='flex flex-col gap-4'>
            <h2 className={`TextPreset6  uppercase text-center ${style}`}>Coming <span className='text-Blue-500'>4 Nov 2020</span></h2>
            <div className='flex gap-4'>
                {children}
            </div>
        </section>
    )
}