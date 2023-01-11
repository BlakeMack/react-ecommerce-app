import { useContext, useState } from "react"
import { Context } from "../context"

function Favitems ({url, id}) {
  const {addImageToCart, cart, removeImageFromCart} = useContext(Context)

  const [hovered, setHovered] = useState(false)

  const isImageInCart = cart.some((photo) => photo.id === id)

  const cartIcon = () => {
    if(isImageInCart) {
      return (
        <i className="ri-shopping-cart-2-fill cart" onClick={() => removeImageFromCart(id)}></i>
      )
    } else if (hovered) {
      return (
        <i
        className="ri-shopping-cart-2-line cart"
        onClick={() => addImageToCart(id)}
        ></i>
      )
    }
  }


  return (
    <div
    className="image-container"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <img src={url} alt="" className="image-grid"/>
      {cartIcon()}
    </div>
  )
}

export default Favitems
