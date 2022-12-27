import { useContext } from "react"
import { Context } from "../context"
import Photoitems from "../components/Photoitems"

function Photos () {
  const {photos} = useContext(Context)

  const images = photos.map((photo) =>
    (
      <Photoitems key={photo.id} img={photo} />
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
