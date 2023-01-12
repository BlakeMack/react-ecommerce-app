import { useContext, useState } from "react"
import { Context } from "../context"
import useCart from "../hooks/useCart"

function Favitems ({url, id}) {
  const {cartIcon} = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
    className="image-container"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <img src={url} alt="" className="image-grid"/>
      {cartIcon(hovered, id)}
    </div>
  )
}

export default Favitems
