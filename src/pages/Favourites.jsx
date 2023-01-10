import { useState, useContext } from "react"
import { Context } from "../context"

export default function Favourites () {
  const {favourites} = useContext(Context)

  const favimages = favourites.map((fav) => (
    <div className="image-container">
      <img src={fav.url} alt="" className="image-grid"/>
    </div>
  )
)

  return (
    <>
      <h1>Favourites page</h1>
      <div className="wrapper">
        {favimages}
      </div>
    </>
  )
}
