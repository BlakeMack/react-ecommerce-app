import { useState, useContext } from "react"
import { Context } from "../context"
import PropTypes from "prop-types"

function Photoitems ({img, className}) {

  const {toggleFavorite, addImageToCart} = useContext(Context)

  const [hovered, setHovered] = useState(false)

  const hearticon = () => {
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
  const carticon = hovered && <i className="ri-shopping-cart-2-line cart" onClick={() => addImageToCart(img.id)}></i>
  return (


    <div className={`image-container ${className}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="" className='image-grid'/>
      {hearticon()}
      {carticon}
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
