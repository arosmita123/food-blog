import React from 'react'
import '../App.css';
const MenuList = ({ data, addToCart }) => {
    return (
        <div className='menu'>
            {
                data.map((item, id) => {
                    return (
                        <div style={{width: '43%'}} key={id}> 
                            <div>
                                <img src={item.image} style={{width: "100%"}}/>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-name'>Rs{item.price} /-</p>
                                <button onClick={()=> addToCart(item)} className="btn">Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuList