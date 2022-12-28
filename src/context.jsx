import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

  const [photos, setPhotos] = useState([])

  const toggleFavorite = (id) => {
    const newphotos = photos.map((photo) => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo)
    setPhotos(newphotos)
}

  console.log(photos)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then ((response) => response.json())
    .then ((data) => setPhotos(data));
  }, [])

  return (
    <Context.Provider value={{photos, toggleFavorite}}>
      {children}
    </Context.Provider >
  )
}

export {ContextProvider, Context}
