import { useContext } from "react"
import { Context } from "../context"

function CartItems ({url}) {

  return (

    <div className="item-container">
      <img src={url} alt="cart item here" className="image-item" />
      <h1>£5.99</h1>
    </div>
  )
}

export default CartItems
