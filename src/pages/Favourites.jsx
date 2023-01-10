import { useState, useContext } from "react"
import { Context } from "../context"
import Favitems from "../components/favitems"

export default function Favourites () {
  const {favourites} = useContext(Context)

  const favimages = favourites.map((fav) => (
    <Favitems key={fav.id} url={fav.url}/>
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
