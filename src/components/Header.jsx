import {Link} from "react-router-dom"

function App () {
  return (
    <div className="navbar">
        <Link to="/"><h1>Pic Some</h1></Link>
        <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-5x"></i></Link>
    </div>
  )
}

export default App
