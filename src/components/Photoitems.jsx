function Photoitems ({img, className}) {
  return (
    <div className="image-container">
      <img src={img.url} alt="" className="image-grid"/>
    </div>
  )
}

export default Photoitems
