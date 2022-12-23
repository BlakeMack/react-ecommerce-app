import { useContext } from "react"
import { Context } from "../context"

function Photos () {
  const {photos} = useContext(Context)

  const images = photos.map((photo) =>
    (
      <img src={photo.url} key={photo.id}/>
    )
  )

  console.log(`photos sent from context: ${photos}`)

  return (
    <>
      <h1>Main Photos here</h1>
      {images}
    </>
  )
}

export default Photos
