import { useContext, useState } from "react"
import { Context } from "../context"

function CartItems ({url, id}) {

  const {removeImageFromCart} = useContext(Context)
  const [isHovered, setIsHovered] = useState(false)

  const trashicon = () => {
    if (isHovered) {
      return <i className="ri-delete-bin-fill trashcan" onClick={() => removeImageFromCart(id)} onMouseLeave={() => setIsHovered(false)}></i>
    } else {
      return <i className="ri-delete-bin-line trashcan" onClick={() => removeImageFromCart(id)} onMouseEnter={() => setIsHovered(true)}></i>
    }
  }

  const iconClass = isHovered ? "ri-delete-bin-fill trashcan" : "ri-delete-bin-line trashcan"

  return (

    <div className="item-container">
      <i className={iconClass}
          onClick={() => removeImageFromCart(id)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ></i>
      <img src={url} alt="cart item here" className="image-item" />
      <h1>£5.99</h1>
    </div>
  )
}

export default CartItems
