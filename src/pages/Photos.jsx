import { useContext } from "react"
import { Context } from "../context"
import Photoitems from "../components/Photoitems"
import { gridSize } from "../utils/grid-sizer"

function Photos () {
  const {photos} = useContext(Context)

  const images = photos.map((photo) =>
    (
      <Photoitems key={photo.id} img={photo} className={gridSize(photo.id)} />
    )
  )

  console.log(`photos sent from context: ${photos}`)

  return (
    <>
      <div className="wrapper">
        {images}
      </div>
    </>
  )
}

export default Photos
