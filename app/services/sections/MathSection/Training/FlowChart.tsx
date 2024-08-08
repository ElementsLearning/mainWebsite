import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { flowchartSteps } from "@/constants/flowchartSteps"

export const FlowChart = () => {

  return (
    <>
    <div className="relative w-full flex flex-col md:flex-row justify-center sm:gap-2 md:h-[80vh]">
      {/* <div className="absolute top-0 right-0 p-8 px-32 rounded-3xl rounded-tr-none bg-sky-30">
        <h3 className=" text-3xl min-[900px]:text-5xl xl:text-6xl text-center font-semibold capitalize hidden md:flex">Our Training Pipeline</h3>
      </div> */}
      {flowchartSteps.map(({name, color, corner, optionals}, i) =>
        <>
          <SlidingDiv  direction={"top"} delay={i*0.3} className="flex md:flex-col justify-center">
            {optionals && 
            <div className="flex-1 md:h-full flex md:flex-col items-center">
              <div className={`flex p-2 w-20 sm:p-4 sm:w-28 md:w-32 md:h-1/2 justify-center items-center text-center rounded-[20px] rounded-${optionals[0].corner}-none border-2 border-dashed border-neutral-500 text-neutral-500`}>
                <p className="font-bold text-xs sm:text-sm md:text-lg">{optionals[0].name}</p>
              </div>
              <div className="flex-1 flex md:flex-col justify-around">
                {Array.from({length: 10}).map((_, i) => <div key={`Dot-${i}`} className="size-0.5 sm:size-1 bg-neutral-600 rounded-full" />)} 
              </div>
            </div>}
            <div className={`flex p-2 size-36 sm:p-4 sm:w-40 xl:p-8 xl:w-64 md:h-1/4 lg:h-1/3 lg:p-6 lg:w-48 justify-center items-center text-center rounded-[30px] rounded-${corner}-none drop-shadow-md`}
            style={{backgroundColor: color}}>
              <p className="font-bold text-sm sm:text-base md:text-xl xl:text-2xl">{name}</p>
            </div>
            {optionals && 
            <div className="flex-1 w-full flex md:flex-col items-center">
              <div className="flex-1 flex md:flex-col justify-around">
                {Array.from({length: 10}).map((_, i) => <div key={`VDot-${i}`} className="size-0.5 sm:size-1 bg-neutral-600 rounded-full" />)} 
              </div>
              <div className={`flex p-2 w-20 sm:p-4 sm:w-28 md:w-32 md:h-1/2 justify-center items-center text-center rounded-[20px] rounded-${optionals[1].corner}-none border-2 border-dashed border-neutral-500 text-neutral-500`}>
                <p className="font-bold text-xs sm:text-sm md:text-lg">{optionals[1].name}</p>
              </div>
            </div>}              
          </SlidingDiv>
          {i !== flowchartSteps.length - 1 && 
          <SlidingDiv direction={"left"} delay={i*0.3 + 0.1} className="flex-1 flex flex-col gap-1 md:flex-row items-center justify-around">
            {Array.from({length: 6}).map((_, i) => <div key={`dots-${i}`} className="size-1 xl:size-1.5 bg-black rounded-full" />)} 
          </SlidingDiv>
          }
        </>
      )}
    </div>
    <div className="flex flex-col gap-6 text-sm sm:text-base md:text-lg xl:text-xl">
      {flowchartSteps.map((step, i) =>
        <>
        <SlidingDiv repeat px={150} direction={i % 2 === 0 ? "left" : "right"} className="flex flex-col gap-2 p-6 shadow-md rounded-[20px]" key={step.name} style={{backgroundColor: step.color}}>
          <h1 className="font-semibold">{step.name}</h1>
          <p>{step.content}</p>
        </SlidingDiv>
        {step.optionals?.map((optional, i) => 
          <SlidingDiv repeat direction={i % 2 === 0 ? "left" : "right"} key={optional.name} className="flex flex-col gap-2 border-4 border-neutral-300 border-dashed p-6 rounded-md">
            <h1 className="font-semibold">{optional.name}</h1>
            <p>{optional.content}</p>
          </SlidingDiv>
        )}
        </> 
      )}
    </div>
    </>
  )
}