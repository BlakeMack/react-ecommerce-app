import {Link} from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context"

function Header () {
  const {cart, photos} = useContext(Context)

  console.log(photos)

  const itemsInCart = cart.length > 0

  const displayCartIcon = () => {
    if(itemsInCart) {
      return (
        <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-5x"></i></Link>
      )
    } else {
      return (
        <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-5x"></i></Link>
      )
    }
  }

  const Favourited = photos.some((photo) => photo.isFavorite)

  const displayHeartIcon = () => {
    if(Favourited) {
      console.log("if statement ran")
      return (
        <Link to="/favourites"><i className="ri-heart-fill ri-fw ri-5x"></i></Link>
      )
    } else {
      console.log("else condition ran")
      return (
        <Link to="/favourites"><i className="ri-heart-line ri-fw ri-5x"></i></Link>
      )
    }
  }

  return (
    <div className="navbar">
        <Link to="/"><h1>Pic Some</h1></Link>
        <div className="saved-item-icons">
          {displayHeartIcon()}
          {displayCartIcon()}
        </div>
    </div>
  )
}

export default Header
