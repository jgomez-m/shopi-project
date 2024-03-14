/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const openProductDetail = () => setIsOpen(true)
    const closeProductDetail = () => setIsOpen(false)
    // Product detail - show product
    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])

    // Checkout sidemenu
    const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false)
    const openCheckoutSide = () => setIsCheckoutSideOpen(true)
    const closeCheckoutSide = () => setIsCheckoutSideOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideOpen,
            openCheckoutSide,
            closeCheckoutSide
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}