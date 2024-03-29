import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

  const [photos, setPhotos] = useState([])
  const [cart, setCart] = useState([])
  const [favourites, setFavourites] = useState([])

  const toggleFavorite = (id) => {
    const newphotos = photos.map((photo) => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo)
    setPhotos(newphotos)
}

  const addImageToCart = (id) => {
    const chosenPhoto = photos.find((photo) => photo.id === id)
    setCart([...cart, chosenPhoto])
  }

  const removeImageFromCart = (id) => {
    const filteredCart = cart.filter(photo => photo.id !== id)
    setCart(filteredCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const savefavToStorage = () => photos.map((photo) => saveToFavourites(photo));

  const saveToFavourites = (img) => {
    if(img.isFavorite) {
        localStorage.setItem(img.id, img.url);
    } else {
      localStorage.removeItem(img.id)
    }
  }

  const addFavouritesFromStorage = (data) => {
    console.log("function ran")
    const favouritedPhotos = data.map((photo) => localStorage.getItem(photo.id) ? {...photo, isFavorite: true} : photo )
    setPhotos(favouritedPhotos)
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then ((response) => response.json())
    .then ((data) => addFavouritesFromStorage(data));
  }, [])

  useEffect(() => {
    // each time the photos state array changes
    // go through the photos array
    // give me only the photos that exist in local storage
    // set the favourites array with these photos
    savefavToStorage()
    const newfavourites = photos.filter((photo) => localStorage.getItem(photo.id));
    setFavourites(newfavourites)
  }, [photos])


  return (
    <Context.Provider value={{photos, cart, favourites, toggleFavorite, addImageToCart, removeImageFromCart, clearCart}}>
      {children}
    </Context.Provider >
  )
}

export {ContextProvider, Context}
