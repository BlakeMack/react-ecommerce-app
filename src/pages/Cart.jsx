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

  const cartText = () => {
    if(cart.length > 0) {
      return "Cart"
    } else {
      return "You currently have no items in your cart :("
    }
  }

  const totalPrice = () => {
    if(cart.length > 0) {
      return <h1 className="total-price">Total: {totalcost()}</h1>
    }
  }

  return (
    <div className="Cart-page">
      <h1>{cartText()}</h1>
      {cartContent}
      {totalPrice()}
      {orderbutton}
    </div>
  )
}

export default Cart
