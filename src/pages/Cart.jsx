import CartItems from "../components/cartItems"
import { useContext, useState } from "react"
import { Context } from "../context"


function Cart () {
  const {cart, clearCart} = useContext(Context)
  const [buttonText, setButtonText] = useState("Checkout")

  const cartContent = cart.map((item) =>
  (
    <CartItems url={item.url} key={item.id} id={item.id}/>
  )
  )


  const checkout = () => {
    setButtonText("Ordering...")
    setTimeout(() => {
      setButtonText("Checkout")
      clearCart()
    }, 3000)
  }

  const orderbutton = cart.length > 0 && <button className="order-button" onClick={checkout}>{buttonText}</button>

  const totalcost = () => {
    const number_total = cart.length * 5.99
    return number_total.toLocaleString("en-GB", {style: "currency", currency: "GBP"})
  }

  return (
    <div className="Cart-page">
      <h1>Cart</h1>
      {cartContent}
      <h1 className="total-price">Total: {totalcost()}</h1>
      {orderbutton}
    </div>
  )
}

export default Cart
