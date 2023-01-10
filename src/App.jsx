import './App.css'
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favourites from './pages/Favourites'
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
        <Route exact path='/favourites'>
          <Favourites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
