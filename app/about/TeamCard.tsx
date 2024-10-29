import { TeamMember } from "@/constants/team"

const tailwindClasses = [
  "rounded-bl-none sm:rounded-bl-none md:rounded-bl-none",
  "rounded-br-none sm:rounded-br-none md:rounded-br-none",
  "rounded-tl-none sm:rounded-tl-none md:rounded-tl-none",
  "rounded-tr-none sm:rounded-tr-none md:rounded-tr-none",
]

export const TeamCard: React.FC<TeamMember> = ({name, designation, corner}) => {

  const cornerClass = `rounded-${corner}-none sm:rounded-${corner}-none md:rounded-${corner}-none `

  return (
    <div className={`relative group overflow-hidden rounded-[25px] sm:rounded-[40px] md:rounded-[50px] border border-black flex-1 aspect-[1.5] ${cornerClass} bg-orange-50`} > 
      <img src={`/team/${name}.jpg`} alt="Missing" className="size-full grayscale group-hover:grayscale-0" />
      <div className="absolute inset-0 translate-y-full overflow-hidden group-hover:translate-y-0 gap-1 transition-transform duration-500 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 bg-black/40">
        <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl font-bold text-[#FBBA42] leading-none">{name}</p>
        <p className="text-[8px] xs:text-[10px] sm:text-xs leading-none lg:text-[10px] xl:text-[10px] text-white">{designation}</p>
      </div>
    </div>
  )
}