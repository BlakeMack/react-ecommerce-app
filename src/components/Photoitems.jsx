import { useState } from "react"

function Photoitems ({img, className}) {

  const [hovered, setHovered] = useState(false)
  const hearticon = hovered && <i className="ri-heart-line heart"></i>
  const carticon = hovered && <i className="ri-shopping-cart-2-line cart"></i>
  return (


    <div className={`image-container ${className}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="" className='image-grid'/>
      {hearticon}
      {carticon}
    </div>
  )
}

export default Photoitems
