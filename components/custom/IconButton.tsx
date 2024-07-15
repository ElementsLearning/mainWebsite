
type IconButtonProps = {
  icon: React.ReactNode
  text: string
  className?: string
  style?: React.CSSProperties
}

export const IconButton: React.FC<IconButtonProps> = ({icon, text, className="", style={}}) => {

  return (
    <button className={`group ${className}`} style={style}>
      <div className="flex items-center gap-2">
        <p className="h-3 sm:h-4 lg:h-6 flex items-center">{text}</p>
        <div className="w-0 aspect-square transition-all duration-500 group-hover:w-3 sm:group-hover:w-4 lg:group-hover:w-6 overflow-hidden">
          {icon}
        </div>
      </div>
    </button>
  )
}
