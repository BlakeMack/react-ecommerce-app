function Photoitems ({img, className}) {
  return (
    <div className={`image-container ${className}`}>
      <img src={img.url} alt="" className='image-grid'/>
      <i className="ri-shopping-cart-2-line cart"></i>
      <i className="ri-heart-line heart"></i>
    </div>
  )
}

export default Photoitems
