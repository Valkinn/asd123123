import React, { useContext, useState } from "react"
import context from "react-bootstrap/esm/AccordionContext"

const CartContext = React.createContext([])

const useItems = () => {
    return useContext(CartContext)
}



const CartProvider = ({defaultValue = [], children}) => {

const [Buy, setBuy] = useState(defaultValue)

const addToCart = ( item ) => { 
    setBuy( prevState => {
        return prevState.concat(item)
    
    })
}

const clearItems = () => { setBuy([]) }

const context = {
    Buy,
    addToCart,
    clearItems
}
 return(
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
 )
}

export {useItems, CartProvider}
