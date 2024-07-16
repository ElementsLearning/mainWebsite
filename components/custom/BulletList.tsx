import { HexagonPlayButton } from "./HexagonPlayButton"

type BulletListProps = {
  list: {
    title: string
    content?: string
  }[]
  contentClass?: string
}

export const BulletList: React.FC<BulletListProps> = ({list, contentClass="text-lg"}) => {

  return (
    <div className="flex flex-col gap-4">
      {list.map(({title, content}) => 
        <div key={title} className="flex gap-2 items-start">
          <div className="size-8 mt-1">
            <HexagonPlayButton outerColor="#FCBA42" />
          </div>
          <div className={contentClass+ " py-1 w-full"} style={{borderBottomColor: "#FCBA42", borderBottomWidth: "2px"}}>
            {/* <p>{`${title}: ${content}`}</p> */}
            <p><strong>{title+(content ? ": " : "")}</strong>{content}</p>
          </div>
        </div>
      )}
    </div>
  )
}
