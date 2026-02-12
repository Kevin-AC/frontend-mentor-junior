import Header from "./components/Header"
import MainCard from "./components/MainCard"
import PlanFree from "./components/PlanFree"
import PlanPro from "./components/PlanPro"
import PricingPlans from "./components/PricingPlans"

function App() {
  return (
    <>
      <Header/>
      <main className="px-4 pt-20 space-y-20 pb-20 md:mt-20">
        <section className="space-y-12">
          <MainCard
            title={"Indulge your passions"}
            paragragh={"Your passions shouldn't be just for the weekend. Earn a living doing what you love."}
            img={"src/assets/illustration-passions.svg"}
          />
          <MainCard
            title={"Gain financial freedom"}
            paragragh={"Start making money work for you. There’s nothing quite like earning while you sleep. "}
            img={"src/assets/illustration-financial-freedom.svg"}
          />
          <MainCard
            title={"Choose your lifestyle"}
            paragragh={"Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."}
            img={"src/assets/illustration-lifestyle.svg"}
          />
          <MainCard
            title={"Work from anywhere"}
            paragragh={"Selling online means not being pinned down. Want to work AND travel? Go for it!"}
            img={"src/assets/illustration-work-anywhere.svg"}
          />
        </section>
        <PricingPlans>
          <PlanFree/>
          <PlanPro/>
        </PricingPlans>
      </main>
      <footer className="px-4 pb-16 space-y-10 bg-[url(src/assets/bg-footer-squiggle.svg)] bg-position-[center_60px] bg-size-[750px] bg-no-repeat">
        <h2 className="Text-Preset-3 text-Neutral-0 text-center">Get notified when we launch</h2>
        <div className="flex flex-col space-y-5 justify-center items-center"> 
          <input className="w-[320px] bg-Blue-800 h-11.25 rounded-full px-5 py-3 font-bold text-sm text-Blue-Gray-500" type="text" placeholder="Email address" />
          <button className="w-[320px] h-11.25 rounded-full px-6 py-3 bg-Cyan text-Blue-800 Text-Preset-6">Get notified</button>
        </div>
      </footer>
    </>
    
  )
}

export default App
