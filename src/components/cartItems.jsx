import { useContext } from "react"
import { Context } from "../context"

function CartItems ({url, id}) {

  const {removeImageFromCart} = useContext(Context)



  return (

    <div className="item-container">
      <i className="ri-delete-bin-line trashcan" onClick={() => removeImageFromCart(id)}></i>
      <img src={url} alt="cart item here" className="image-item" />
      <h1>£5.99</h1>
    </div>
  )
}

export default CartItems
