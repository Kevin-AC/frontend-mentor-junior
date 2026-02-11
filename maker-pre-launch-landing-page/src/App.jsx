import Header from "./components/Header"
import MainCard from "./components/MainCard"
function App() {
  return (
    <>
      <Header/>
      <main className="px-4 pt-20 space-y-20">
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
      </main>
    </>
    
  )
}

export default App
