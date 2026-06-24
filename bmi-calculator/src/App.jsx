import Card from "./components/Card"
import LimitatiosBmiCard from "./components/LimitationsBmiCard"
import TipsCard from "./components/TipsCard"

function App() {
  return (
    <>
      <main className="w-full font-Inter">
        <section className="px-6 pt-8  text-center flex flex-col items-center gap-8 rounded-b-[35px] bg-linear-to-tr from-White  to-Gradient-2 ">
          <img className="w-10" src="src/assets/images/logo.svg" alt="logo-icon" />
          <div className="w-82">
              <h1 className="Preset-2 text-Blue-900 px-3">Body Mass<br/>Index Calculator</h1>
              <p className="pt-6 Preset-6-Regular text-Grey-500">Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                  While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
              </p>
            </div>
          <div className="-mb-92.5 z-10 relative">
              <Card/>
            </div>
        </section>
        <section className="flex flex-col items-center gap-12 pt-105 pb-12">
          <picture className="max-w-93.75">
            <img src="src/assets/images/image-man-eating.webp" alt="man-eating" />
          </picture>
          <article className="w-82 space-y-8">
            <h2 className="Preset-3 text-Blue-900">What your BMI result means</h2>
            <p className="Preset-6-Regular text-Grey-500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
          </article>
        </section>
        <section className="px-6 py-12  bg-linear-to-r from-Gradient-1/10  to-Gradient-2/30 ">
          <div className="w-81.75 flex flex-col gap-10 ">
            <TipsCard
              title={"Healthy eating"}
              text={"Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."}
              imgUrl={"src/assets/images/icon-eating.svg"}
            />
            <TipsCard
              title={"Regular exercise"}
              text={"Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."}
              imgUrl={"src/assets/images/icon-exercise.svg"}
            />
            <TipsCard
              title={"Adequate sleep"}
              text={"Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."}
              imgUrl={"src/assets/images/icon-sleep.svg"}
            />
          </div>
        </section>
        <section className="flex flex-col items-center gap-16 pb-12 ">
          <article className="text-center w-81 space-y-8 mt-22">
            <h2 className="Preset-3 text-Blue-900">Limitations of BMI</h2>
            <p className="Preset-6-Regular text-Grey-500">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </article>
          <div className="flex flex-col gap-4">
            <LimitatiosBmiCard
              title={"Gender"}
              imgUrl={"src/assets/images/icon-gender.svg"}
              text={"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}
            />
            <LimitatiosBmiCard
              title={"Age"}
              imgUrl={"src/assets/images/icon-age.svg"}
              text={"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}
            />

            <LimitatiosBmiCard
              title={"Muscle"}
              imgUrl={"src/assets/images/icon-muscle.svg"}
              text={"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}
            />

            <LimitatiosBmiCard
              title={"Pregnancy"}
              imgUrl={"src/assets/images/icon-pregnancy.svg"}
              text={"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}
            />
            <LimitatiosBmiCard
              title={"Race"}
              imgUrl={"src/assets/images/icon-race.svg"}
              text={"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}
            />

          </div>

        </section>
      </main>
    </>
  )
}

export default App
