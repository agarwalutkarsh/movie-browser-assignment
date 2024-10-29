"use client"
import React, { createContext, useState } from 'react'

export const MainContext = createContext()

const MainContextWrapper = ({children}) => {

    const [carouselMovieArr, setCarouselMovieArr] = useState([])

    const state = {
        carouselMovieArr,
        setCarouselMovieArr
    }

  return (
    <MainContext.Provider value={{...state}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextWrapper