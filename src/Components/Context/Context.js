import React, { createContext, useContext, useState } from "react";

const CreateCarousel = createContext()

export function CarouselProvider({children}){
    const [carouselAnimation , setCarouselAnimation] = useState(false)
    return(
        <CreateCarousel.Provider value={{carouselAnimation,setCarouselAnimation}}>{children}</CreateCarousel.Provider>
    )
}

export default function useCarousel(){
    return useContext(CreateCarousel);
}