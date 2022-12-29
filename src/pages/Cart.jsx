import CartItems from "../components/cartItems"
import { useContext } from "react"
import { Context } from "../context"


function Cart () {
  const {cart} = useContext(Context)

  const cartContent = cart.map((item) =>
  (
    <CartItems url={item.url} key={item.id}/>
  )
  )
  return (
    <div className="Cart-page">
      <h1>Cart</h1>
      {cartContent}
      <h1 className="total-price">Total: </h1>
      <button className="order-button">Checkout</button>
    </div>
  )
}

export default Cart
