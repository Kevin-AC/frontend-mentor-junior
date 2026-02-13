import { useState } from "react"
import Header from "./components/Header"
import MainCard from "./components/MainCard"
import PlanFree from "./components/PlanFree"
import PlanPro from "./components/PlanPro"
import PricingPlans from "./components/PricingPlans"

function App() {
  const [email,setEmail] = useState('')
  const [error, setError] = useState(false);
  const handleSubmit=()=>{
    if(!email) return
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = regex.test(email) && email.length > 0;
    setError(!valid)
    return valid
  }
  return (
    <>
      <Header/>
      <main className="px-4 md:px-8 pt-20 lg:pt-0 space-y-20 pb-20  grid place-content-center">
        <section className="lg:px-32 space-y-12 lg:space-x-8 lg:flex ">
          <MainCard
            title={"Indulge your passions"}
            paragragh={"Your passions shouldn't be just for the weekend. Earn a living doing what you love."}
            img={"/illustration-passions.svg"}
          />
          <MainCard
            title={"Gain financial freedom"}
            paragragh={"Start making money work for you. There’s nothing quite like earning while you sleep. "}
            img={"/illustration-financial-freedom.svg"}
            
          />
          <MainCard
            title={"Choose your lifestyle"}
            paragragh={"Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."}
            img={"/illustration-lifestyle.svg"}
            
          />
          <MainCard
            title={"Work from anywhere"}
            paragragh={"Selling online means not being pinned down. Want to work AND travel? Go for it!"}
            img={"/illustration-work-anywhere.svg"}
            
          />
        </section>
        <PricingPlans>
          <PlanFree/>
          <PlanPro/>
        </PricingPlans>
      </main>
      <footer className="px-4 pb-16 space-y-10 bg-[url(/bg-footer-squiggle.svg)] bg-position-[center_60px] bg-size-[750px] bg-no-repeat">
        <h2 className="Text-Preset-3 text-Neutral-0 text-center">Get notified when we launch</h2>
        <div className="flex flex-col lg:flex-row lg:gap-5 space-y-6 lg:space-y-0 justify-center items-center "> 
          <div className="flex flex-col relative">
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-[320px] bg-Blue-800 h-11.25 rounded-full px-5 py-3 font-bold text-sm text-Blue-Gray-500 buttonSpecial" type="text" placeholder="Email address" />
            <span className={`${error ? 'text-Red-400 Text-Preset-7 absolute top-12 lg:top-14' : 'hidden'}`}>Oops! That doesn’t look like an email address</span>
          </div>
          <button onClick={handleSubmit}
           className="w-[320px] lg:w-34.25 h-11.25 rounded-full px-6 py-3 bg-Cyan text-Blue-800 Text-Preset-6 buttonSpecial hover:bg-Blue-800 ">Get notified</button>
        </div>
      </footer>
    </>
    
  )
}

export default App
