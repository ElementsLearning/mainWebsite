import { useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { PlusIcon, XIcon } from "lucide-react"

type NewComponentButtonProps = {
  onAdd: (comp: string) => void
}

export const NewComponentButton: React.FC<NewComponentButtonProps> = ({onAdd}) => {
  
  const [opened, setOpened] = useState(false)
  
  return (
    <div className="flex justify-center">
      {opened ? 
      <Card className="flex p-2 rounded-md gap-4">
        <Button onClick={() => setOpened(false)} variant={"secondary"} size={"icon"}>
          <XIcon className="size-4" />
        </Button>
        <Button onClick={() => { onAdd("PARAGRAPH"); setOpened(false) }} variant={"ghost"}>Paragraph</Button>
        <Button onClick={() => { onAdd("HEADER"); setOpened(false) }} variant={"ghost"}>Header</Button>
        <Button onClick={() => { onAdd("BULLET"); setOpened(false) }} variant={"ghost"}>Bullets</Button>
        <Button onClick={() => { onAdd("IMAGE"); setOpened(false) }} variant={"ghost"}>Image</Button>
      </Card> :
      <Button className="flex gap-1 items-center" onClick={() => setOpened(true)}>
        Add New Component
        <PlusIcon className="size-4" />
      </Button>}
    </div>
  )
}
