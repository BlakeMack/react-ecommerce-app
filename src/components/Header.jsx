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
  return (
    <div className="navbar">
        <Link to="/"><h1>Pic Some</h1></Link>
        {displayCartIcon()}
    </div>
  )
}

export default Header
