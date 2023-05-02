import React, { useEffect, useState } from 'react'

const CartItems = ({ cart }) => {

    const [products, setProducts ] = useState([])

    useEffect(()=>{
        setProducts(cart)
    }, [cart])
    return (
        <div>
            {
                products?.map((items, itemindex) => {

                    return (
                        <div >
                            <img src={items.image} style={{width: 150}} />
                            <span className='product'>{items.name}</span><span></span>
                            <span className='product'>Rs{items.price * items.quantity}/-</span>
                            <button onClick={()=> {
                                const product = products.map((i, index) =>{
                                    return itemindex === index ? { ...i, quantity: i.quantity > 0 ? i.quantity-1 : 0} : i
                                })
                                setProducts(product)
                             
                            }}>-</button>
                            <span className='product'>{items.quantity}</span>
                            <button onClick={()=> {
                                const product = products.map((i, index) =>{
                                    return itemindex === index ? { ...i, quantity: i.quantity + 1} : i
                                })
                                setProducts(product)
                                // console.log(product)
                            }}>+</button>
                        </div>
                    )
                })
            }
            <p className='product'> Total Amount: <span></span> Rs.
                {
                    products.map(item => item.price * item.quantity).reduce((acc, value) => acc + value, 0)
                }
            </p>
        </div>
    )
}

export default CartItems