import { ChangeEvent, useState } from "react"
import { Input } from "../ui/input"
import { XIcon } from "lucide-react"
import { Card } from "../ui/card"

type ImageUploaderProps = {
  onImageChange: (data?: string, name?: string) => void
  className?: string
  data?: string
  src?: string
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({onImageChange, src, data, className=""}) => {

  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(data as string)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
        onImageChange(reader.result as string, file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative flex flex-col">
      <Card onClick={() => {onImageChange(undefined, undefined); setSelectedImage(null)}} className="absolute top-0 bg-white rounded-sm p-1 shadow-md right-0 translate-x-1/2 -translate-y-1/2">
        <XIcon className="size-4" />
      </Card>
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage ? <img src={selectedImage as string} alt="Selected Image" className={className} /> :
      src && <img src={src} alt="Cant Find Image" className={className} />}
    </div>
  )
}
