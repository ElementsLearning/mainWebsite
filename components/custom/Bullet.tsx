type BulletProps = {
  color?: string  
}

export const Bullet = ({color="#000000"}) => {
  
  return (
    <div className="aspect-square w-fit rounded-full p-1.5 sm:p-2" style={{backgroundColor: color}}>
      <div className="bg-white rounded-full w-full aspect-square p-1.5 sm:p-2">
        <div className="aspect-square rounded-full bullet-shadow w-6 min-[950px]:w-4 min-[1200px]:w-6" style={{backgroundColor: color}}></div>
      </div>
    </div>
  )
}
