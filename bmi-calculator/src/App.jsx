import Card from "./components/Card"
import LimitatiosBmiCard from "./components/LimitationsBmiCard"
import TipsCard from "./components/TipsCard"

function App() {
  return (
    <>
        {/*hero*/}
        <header className="w-full max-w-360 mx-auto lg:h-184.5 relative px-6 pt-8 sm:px-10 lg:px-36 lg:py-22 font-Inter">
          <div className="w-full flex flex-col items-center lg:items-start gap-8 lg:gap-6">
          <div className="absolute top-0 left-[-50vw] right-0 lg:right-[30%] h-3/5 sm:h-3/4 lg:h-[93%] rounded-b-4xl gradient1  z-10" aria-hidden="true" />
            <img className="w-10 lg:w-16 z-30" src="/images/logo.svg" alt="logo-icon" />
            <article className="flex flex-col gap-8 sm:gap-10 text-center items-center lg:flex-row z-30" >
              
              <div className=" lg:w-141 lg:text-left">
                <h1 className="preset-2 lg:preset-1 text-Blue-900">Body Mass<br/>Index Calculator</h1>
                <p className="pt-6 preset-6-Regular text-Grey-500 lg:w-116">Better understand your weight in relation to your height using our body mass index (BM) calculator.
                  While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>
              </div>
              <div className="w-full lg:w-141">
                <Card />
              </div>
            </article>
          </div>
        </header>
      <main className="w-full flex flex-col items-center gap-16 mt-32">
        <section className="w-full lg:px-36 max-w-360">
          <div className="w-full flex flex-col  sm:flex-row items-center gap-8 sm:gap-2 lg:gap-22 lg:relative">
            <img className="hidden lg:inline lg:absolute -top-12 right-16 " src="/images/pattern-curved-line-left.svg" alt="" />
            <picture className="w-auto">
              <img className="w-full sm:w-108 lg:w-141 object-cover sm:-ml-20 lg:m-0" src="/images/image-man-eating.webp" alt="man-eating" />
            </picture>
            <article className="w-82 lg:w-116 space-y-6 sm:text-left lg:mt-32">
              <h2 className="preset-3 lg:preset-2 text-Blue-900">What your BMI result means</h2>
              <p className="preset-6-Regular text-Grey-500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </article>
          </div>
        </section>
        
        <section className="max-w-360 relative px-6 py-12 sm:px-8 sm:py-13 lg:px-32 lg:py-24 sm:flex flex-col items-center lg:flex-row">
          <div className="absolute top-0 left-[-50vw] lg:right-[5%] right-[-5%] h-full bg-linear-to-r from-Gradient-1/5  to-Gradient-2/30 lg:rounded-3xl z-10" aria-hidden="true" />
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
       
        <section className="max-w-360 flex flex-col items-stretch sm:grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-x-4 lg:gap-y-6 pb-12 lg:px-36 lg:py-25.5 relative">
          <img className="hidden lg:inline lg:absolute top-2/5 left-2/9" src="images/pattern-curved-line-right.svg" alt="" />
          <article className="text-center lg:text-left w-81 sm:w-170 lg:w-full sm:col-span-2 lg:col-span-6 space-y-8 mt-22 lg:mt-0">
            <h2 className="preset-3 lg:preset-2 text-Blue-900">Limitations of BMI</h2>
            <p className="preset-6-Regular text-Grey-500">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </article>
          <div className="w-full sm:max-w-91.5 lg:col-start-8 lg:col-span-5">
            <LimitatiosBmiCard
              title={"Gender"}
              imgUrl={"/images/icon-gender.svg"}
              text={"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}
            />
          </div>
          <div className="w-full sm:max-w-91.5 lg:col-start-5 lg:col-span-4">
            <LimitatiosBmiCard
              title={"Age"}
              imgUrl={"/images/icon-age.svg"}
              text={"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}
            />
          </div>
          <div className="w-full sm:max-w-91.5 lg:col-start-9 lg:col-span-4">
            <LimitatiosBmiCard
              title={"Muscle"}
              imgUrl={"/images/icon-muscle.svg"}
              text={"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}
            />
          </div>
          <div className="w-full sm:max-w-91.5 lg:col-start-3 lg:col-span-4">
            <LimitatiosBmiCard
              title={"Pregnancy"}
              imgUrl={"/images/icon-pregnancy.svg"}
              text={"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}
            />
          </div>
          <div className="w-full sm:max-w-91.5 sm:col-span-2 sm:justify-self-center lg:col-start-7 lg:col-span-5">        
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
