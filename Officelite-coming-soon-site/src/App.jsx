import Hero from './Components/Hero.jsx'
import Card from './Components/Card.jsx'
import Button from './Components/Button.jsx'
import Timer from './Components/Timer.jsx'
import './index.css'

function App() {
  

  return (
   <>
      <header>
        <Hero />
      </header>
      <main className='px-4 pb-20 space-y-16 flex flex-col items-center bg-Neutral-50'>
        <section className='space-y-8'>
          <Card
            type="Basic"
            price={'Free'}
            description={'Per user, billed monthly'}
            profit1={'All essential integrations'}
            profit2={'50 GB  storage'}
            profit3={'More control and insights'}
          >
            <Button text={'Try for Free'} style={'proPlanButton'} />
          </Card >
          <Card
            type="Pro"
            price={'$9.99'}
            description={'Up to 5 users for free'}
            profit1={'Basic document collaboration'}
            profit2={'2 GB storage'}
            profit3={'Great security and support'}
          >
            <Button text={'Try for Free'} style={'proPlanButton'} />
          </Card >
          <Card
            type="Ultimate"
            price={'$19.99'}
            description={'Per user, billed monthly'}
            profit1={'Robust work management'}
            profit2={'100 GB  storage'}
            profit3={'VIP support'}
          >
            <Button text={'Try for Free'} style={'proPlanButton'} />
          </Card >
        </section>
        <section className='space-y-8 grid place-items-center'>
          <Timer/>
          <Button text={'Get Started'} style={'buttonPrimary'} />
        </section>
      </main>
   </>
  )
}

export default App
