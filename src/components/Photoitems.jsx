import { useState, useContext } from "react"
import { Context } from "../context"
import PropTypes from "prop-types"
import useCart from "../hooks/useCart"

function Photoitems ({img, className}) {

  const {toggleFavorite} = useContext(Context)
  const {cartIcon} = useCart()
  const [hovered, setHovered] = useState(false)

  const heartIcon = () => {
    if(img.isFavorite) {
      return (
        <i
        className="ri-heart-fill heart"
        onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i
        className="ri-heart-line heart"
        onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    }
  }

  // const hearticon = hovered && <i className="ri-heart-line heart"></i>
  // const carticon = hovered && <i className="ri-shopping-cart-2-line cart" onClick={() => addImageToCart(img.id)}></i>
  return (
    <div className={`image-container ${className}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="" className='image-grid'/>
      {heartIcon()}
      {cartIcon(hovered, img.id)}
    </div>
  )
}

Photoitems.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })
}

export default Photoitems
