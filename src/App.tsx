import {gsap} from "gsap"
import {Flip} from 'gsap/Flip'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect} from "react";
import SpookyFace from './assets/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg'

gsap.registerPlugin(Flip)
gsap.registerPlugin(ScrollTrigger)

// https://picsum.photos/200

function App() {

    useEffect(() => {
        const myBox = document.querySelector("#myBox") as HTMLElement
        const myImg = document.querySelector("#myImg") as HTMLElement
        const mySvg = document.querySelector("#mySvg") as HTMLElement

        const myContainer = document.querySelector("#container")

        const boxState = Flip.getState(myBox)
        const imgState = Flip.getState(myImg)
        const svgState = Flip.getState(mySvg)

        myImg.style.gridColumn = "span 8"
        myBox.style.gridColumn = "span 1"
        mySvg.style.gridColumn = "span 3"

        const tl = gsap.timeline({
            scrollTrigger: {
                start: "-50%",
                end: "-20%",
                markers: true,
                trigger: myContainer,
                scrub: true
            }
        })

        tl.add(Flip.from(imgState, {}), )
        tl.add(Flip.from(boxState, {}), "<")
        tl.add(Flip.from(svgState, {}), "<")

    }, [])

  return (
      <div>
          <div className={"h-[500px] bg-amber-400 grid place-items-center"}>
              I am spacer
          </div>
          <div className={"grid grid-cols-12"} id={"container"}>
              <div className={"relative h-1/2 col-span-3 "} id={"myImg"}>
                  <img src={SpookyFace} alt="" className={"absolute w-full h-full object-cover"}/>
              </div>
              <div className={"bg-orange-700 col-span-3 w-full h-1/2 grid place-items-center"} id={"myBox"}></div>

              <svg className={"text-orange-700 col-span-6"} viewBox="0 0 960 1536" xmlns="http://www.w3.org/2000/svg"
                   id={"mySvg"}>
                  <path d="M160 1536H0V768H160L800 0H960V768H800L160 1536Z" fill="currentColor"/>
              </svg>
          </div>

          <div className={"h-[500px] bg-emerald-400 grid place-items-center"}>
              I am spacer
          </div>
      </div>
  )
}

export default App
