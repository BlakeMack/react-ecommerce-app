import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {

  const [photos, setPhotos] = useState([])

  fetch("https://github.com/bobziroll/scrimba-react-bootcamp-images")
    .then ((response) => response.json())
    .then ((data) => console.log(data));

  return (
    <Context.Provider value="">
      {children}
    </Context.Provider >
  )
}

export {ContextProvider, Context}
