import { ChangeEvent, useState } from "react"
import { Input } from "../ui/input"

type ImageUploaderProps = {
  onImageChange: (data: string, name: string) => void
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({onImageChange}) => {

  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>()
  const [imageName, setImageName] = useState("")

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
      onImageChange(reader.result as string, file.name)
    }
  }

  return (
    <div className="flex flex-col">
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage as string} alt="Selected Image" />}
    </div>
  )
}
