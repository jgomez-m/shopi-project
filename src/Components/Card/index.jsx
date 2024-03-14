import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid"

const Card = (item) => {
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData] )
        context.openCheckoutSide()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <button className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                >
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
                </button>
            )
        } else {
            return (
                <button
                    onClick={(event) => addProductsToCart(event, item.data )}  
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </button>
            )
        }
    }

    return (

        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(item.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3'>{item.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg'
                src={item.data.image} alt={item.data.title} />
                {renderIcon(item.data.id)}

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{item.data.title}</span>
                <span className='text-sm font-medium'>${item.data.price}</span>
            </p>
        </div>
    )

}

export default Card