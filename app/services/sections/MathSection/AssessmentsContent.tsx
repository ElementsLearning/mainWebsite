import { AssessmentCard } from "@/components/custom/AssessmentCard"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { FadeIn } from "@/components/custom/FadeIn"
import { studentAssessments } from "@/constants/studentAssessments"
import { teacherAssessments } from "@/constants/teacherAssessment"

export const AssessmentsContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full gap-4 p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
      <CustomAccordion containerClass={"w-full"} type="multiple"
      items={[
        {
          title: "Student Assessments",
          id: "Student Assessments",
          content: 
          <div className="flex flex-col flex-wrap sm:flex-row gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
            {studentAssessments.map((assessment,i) => <AssessmentCard key={`assessment-${i}`} {...assessment} index={i} />)}
          </div>
        },
        {
          title: "Teacher Assessments",
          id: "Teacher Assessments",
          disabled: true,
          content: 
          
          <div className="py-8 md:py-6 lg:p-8 flex md:flex-row gap-8 md:gap-4 flex-col">
            {teacherAssessments.map((assessment, i) => <AssessmentCard key={`teacherAssessment-${i}`} {...assessment} index={i} />)}
          </div>

        },
      ]}
      />
    </FadeIn>
  )
}
