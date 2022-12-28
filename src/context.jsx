import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

  const [photos, setPhotos] = useState([])
  const [cart, setCart] = useState([])

  const toggleFavorite = (id) => {
    const newphotos = photos.map((photo) => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo)
    setPhotos(newphotos)
}

  const addImageToCart = (id) => {
    const chosenPhoto = photos.find((photo) => photo.id === id)
    setCart([...cart, chosenPhoto])
  }

  // const isImageInCart = (id) => {
  //   cart.some((photo) => photo.id === id)
  // }

  console.log(photos)
  console.log(cart)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then ((response) => response.json())
    .then ((data) => setPhotos(data));
  }, [])

  return (
    <Context.Provider value={{photos, cart, toggleFavorite, addImageToCart}}>
      {children}
    </Context.Provider >
  )
}

export {ContextProvider, Context}
