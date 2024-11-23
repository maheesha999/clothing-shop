import React, { useContext } from 'react'
import './ClothingItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ClothingItem = ({ id, name, price, description, image }) => {

   
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    return (
        <div className='clothing-item'>
            <div className="clothing-item-img-container">
                <img className='clothing-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
    
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                    :<div className='clothing-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                       
                    </div>

                }
            </div>
            <div className="clothing-item-info">
                <div className="clothing-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="clothing-item-desc">{description}</p>
                <p className="clothing-item-price">${price}</p>
            </div>
        </div>
    )
}

export default ClothingItem