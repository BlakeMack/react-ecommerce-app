import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../context";

function useCart () {
  const [isHovered, setIsHovered] = useState(false)
  const {cart, removeImageFromCart, addImageToCart} = useContext(Context)

  // const ref = useRef(null)

  const enter = () => {
    setIsHovered(true)
  }

  const leave = () => {
    setIsHovered(false)
  }

  const isImageInCart = (id) => cart.some((photo) => photo.id === id)

  const cartIcon = (state, id) => {
    if(isImageInCart(id)) {
      return (
        <i className="ri-shopping-cart-2-fill cart" onClick={() => removeImageFromCart(id)}></i>
      )
    } else if (state) {
      return (
        <i
        className="ri-shopping-cart-2-line cart"
        onClick={() => addImageToCart(id)}
        ></i>
      )
    }
  }

  // useEffect(() => {
  //   if(ref.current) {
  //     ref.current.addEventListener("mousenter", enter);
  //     ref.current.addEventListener("mouseleave", leave);
  //   }
  //   return () => {
  //     if(ref.current) {
  //       ref.current.removeEventListener("mousenter", enter)
  //       ref.current.removeEventListener("mouseleave", leave)
  //     }
  //   }
  // }, [])

  return {isHovered, cartIcon, isImageInCart}
}

export default useCart
