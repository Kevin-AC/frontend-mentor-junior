import Hero from './Components/Hero.jsx'
import Card from './Components/Card.jsx'
import Button from './Components/Button.jsx'
import Timer from './Components/Timer.jsx'
import './index.css'

function App() {
  

  return (
   <>
      <header className="relative px-4 pt-12 lg:h-screen overflow-hidden grid place-items-center">
        <img className="mx-auto md:ml-10 lg:ml-96 w-32 md:w-40" src="/assets/shared/logo.svg" alt="" />
        <img className='absolute -z-10 -top-44 md:-top-96 md:-right-96' src="/assets/home/bg-pattern-header.svg" alt="bg-pattern-header" />
        <Hero />
      </header>
      <main className='relative space-y-16 md:px-10  bg-Neutral-50 grid place-content-center'>
        <section className='w-full space-y-8 z-20 lg:flex lg:gap-8 justify-center'>
          <Card
            type="Basic"
            price={'Free'}
            description={'Per user, billed monthly'}
            profit1={'All essential integrations'}
            profit2={'50 GB  storage'}
            profit3={'More control and insights'}
          >
            <Button text={'Try for Free'} style={'PlanButton'} />
          </Card >
          <Card
            type="Pro"
            price={'$9.99'}
            description={'Up to 5 users for free'}
            profit1={'Basic document collaboration'}
            profit2={'2 GB storage'}
            profit3={'Great security and support'}
          >
            <Button text={'Try for Free'} style={'proPlanButton' } />
          </Card >
          <Card
            type="Ultimate"
            price={'$19.99'}
            description={'Per user, billed monthly'}
            profit1={'Robust work management'}
            profit2={'100 GB  storage'}
            profit3={'VIP support'}
          >
            <Button text={'Try for Free'} style={'PlanButton'} />
          </Card >
        </section>
        <section className='w-full h-full  flex flex-col gap-10 lg:flex-row lg:justify-between items-center z-20 '>
          <Timer/>
          <Button text={'Get Started'} style={'buttonFooter'} />
        </section>
        <div className='w-full h-312 md:h-[986px] lg:h-[603px] absolute bg-Neutral-900 bottom-0 z-10 bg-[url(/assets/home/bg-pattern-footer.svg)] bg-position-[center_140px] md:bg-bottom  bg-cover md:bg-contain bg-no-repeat'></div>
      </main>
   </>
  )
}

export default App
