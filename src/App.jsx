import './App.css'
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Header from "./components/Header"
import {Route, Switch} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App
