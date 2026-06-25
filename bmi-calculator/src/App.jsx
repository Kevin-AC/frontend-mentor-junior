import Card from "./components/Card"
import LimitatiosBmiCard from "./components/LimitationsBmiCard"
import TipsCard from "./components/TipsCard"

function App() {
  return (
    <>
        {/*hero*/}
        <header className="w-full max-w-360 mx-auto lg:h-184.5 relative px-6 pt-8 sm:px-10 lg:px-36 lg:py-22 font-Inter">
          <div className="w-full flex flex-col items-center lg:items-start gap-8 lg:gap-6">
            <div className="absolute top-0 left-[-50vw] right-0 lg:right-[30%] h-full rounded-b-4xl bg-linear-to-tr from-White to-Gradient-2  z-10" aria-hidden="true" />
            <img className="w-10 lg:w-16 z-30" src="/images/logo.svg" alt="logo-icon" />
            <article className="flex flex-col gap-8 sm:gap-10 text-center items-center lg:flex-row z-30" >
              
              <div className=" lg:w-141 lg:text-left">
                <h1 className="Preset-2 text-Blue-900">Body Mass<br/>Index Calculator</h1>
                <p className="pt-6 Preset-6-Regular text-Grey-500 lg:w-116">Better understand your weight in relation to your height using our body mass index (BM) calculator.
                  While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>
              </div>
              <div className="w-full lg:w-141">
                <Card />
              </div>
            </article>
          </div>
        </header>
      <main className="w-full flex flex-col items-center gap-16 mt-16">
        <section className="w-full lg:px-36 max-w-360">
          <div className="w-full flex flex-col  sm:flex-row items-center gap-8 sm:gap-2 lg:gap-22">
            <picture className="w-auto">
              <img className="w-full sm:w-108 object-cover sm:-ml-20 lg:m-0" src="/images/image-man-eating.webp" alt="man-eating" />
            </picture>
            <article className="w-82 lg:w-116 space-y-6  sm:text-left">
              <h2 className="text-3xl lg:text-5xl leading-[1.1] tracking-tighter font-semibold text-Blue-900">What your BMI result means</h2>
              <p className="Preset-6-Regular text-Grey-500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </article>
          </div>
        </section>
        
        <section className="max-w-360 relative px-6 py-12 sm:px-8 sm:py-13 lg:px-32 lg:py-24 sm:flex flex-col items-center lg:flex-row">
          <div className="absolute top-0 left-[-50vw] right-[-50vw] lg:right-[5%] h-full bg-linear-to-r from-Gradient-1/5  to-Gradient-2/30 lg:rounded-3xl z-10 " aria-hidden="true" />
          <div className="w-81.75 sm:w-171.5 lg:w-fit flex flex-col lg:flex-row gap-10 lg:gap-8 z-30">
            <TipsCard
              title={"Healthy eating"}
              text={"Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."}
              imgUrl={"/images/icon-eating.svg"}
            />
            <TipsCard
              title={"Regular exercise"}
              text={"Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."}
              imgUrl={"/images/icon-exercise.svg"}
            />
            <TipsCard
              title={"Adequate sleep"}
              text={"Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."}
              imgUrl={"/images/icon-sleep.svg"}
            />
          </div>
        </section>
       
        <section className="flex flex-col items-center gap-16 pb-12 ">
          <article className="text-center w-81 sm:w-170 space-y-8 mt-22">
            <h2 className="Preset-3 text-Blue-900">Limitations of BMI</h2>
            <p className="Preset-6-Regular text-Grey-500">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </article>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-8 sm:max-w-180">
            <LimitatiosBmiCard
              title={"Gender"}
              imgUrl={"/images/icon-gender.svg"}
              text={"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}
            />
            <LimitatiosBmiCard
              title={"Age"}
              imgUrl={"/images/icon-age.svg"}
              text={"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}
            />

            <LimitatiosBmiCard
              title={"Muscle"}
              imgUrl={"/images/icon-muscle.svg"}
              text={"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}
            />

            <LimitatiosBmiCard
              title={"Pregnancy"}
              imgUrl={"/images/icon-pregnancy.svg"}
              text={"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}
            />
            <LimitatiosBmiCard
              title={"Race"}
              imgUrl={"/images/icon-race.svg"}
              text={"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}
            />

          </div>

        </section>
      </main>
      
      
    </>
  )
}

export default App
