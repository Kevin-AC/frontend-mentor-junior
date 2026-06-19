import Card from "./components/Card"

function App() {
  return (
    <>
      <main className="w-full font-Inter ">
        <section className="px-6 pt-9 text-center flex flex-col items-center gap-8">
          <img src="src/assets/images/logo.svg" alt="logo-icon" />
          <div className="w-[328px]">
              <h1 className="Preset-2 text-Blue-900 px-3">Body Mass<br/>Index Calculator</h1>
              <p className="pt-6 Preset-6-Regular text-Grey-500">Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                  While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
              </p>
            </div>
            <Card/>

        </section>
      </main>
    </>
  )
}

export default App
