import {Link} from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context"

function Header () {
  const {cart} = useContext(Context)

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

  // const displayHeartIcon = () => {
  //   if(itemsInCart) {
  //     return (
  //       <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-5x"></i></Link>
  //     )
  //   } else {
  //     return (
  //       <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-5x"></i></Link>
  //     )
  //   }
  // }

  return (
    <div className="navbar">
        <Link to="/"><h1>Pic Some</h1></Link>
        <div className="saved-item-icons">
          <Link to="/favourites"><i className="ri-heart-line ri-fw ri-5x"></i></Link>
          {displayCartIcon()}
        </div>
    </div>
  )
}

export default Header
