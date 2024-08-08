import { CountUp } from "@/components/custom/CountUp"

export const Stats = () => {

  return (
    <>
      <div className="flex flex-col gap-2 items-center w-32">
        <img src="/landingpage/students.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={7500} increment={150} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl leading-none">Students</p>
          <p className="text-sm xs:text-base sm:text-lg leading-none">Upskilled</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/landingpage/teachers.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={3070} increment={60} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl leading-none">Teachers</p>
          <p className="text-sm xs:text-base sm:text-lg leading-none">Trained</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/landingpage/parents.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={100} increment={2} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl leading-none">Parents</p>
          <p className="text-sm xs:text-base sm:text-lg leading-none">Engaged</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src="/landingpage/schools.png" className="w-32" />
        <div className="flex flex-col justify-center items-center">
          <CountUp className="text-xl xs:text-2xl sm:text-3xl font-bold" start={0} end={55} increment={1} delay={20} suffix="+"/>
          <p className="xs:text-xl sm:text-2xl leading-none">Schools</p>
          <p className="text-sm xs:text-base sm:text-lg leading-none">Onboarded</p>
        </div>
      </div>
    </>
  )
}
