import { useState, useContext } from "react"
import { Context } from "../context"
import Favitems from "../components/favitems"
import { gridChecker } from "../utils/grid-checker"

export default function Favourites () {
  const {favourites} = useContext(Context)

  const className = gridChecker(favourites.length)

  const favimages = favourites.map((fav) => (
    <Favitems key={fav.id} url={fav.url} id={fav.id}/>
  )
)

  const favouritesText = () => {
    if(favourites.length > 0 ) {
      return "Your Favourites"
    } else {
      return "You currently have no favourites :("
    }
  }

  return (
    <>
      <h1 className="favourites-text">{favouritesText()}</h1>
      <div className={className}>
        {favimages}
      </div>
    </>
  )
}
