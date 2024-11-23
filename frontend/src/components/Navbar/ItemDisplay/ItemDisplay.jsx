import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../../context/StoreContext'
import ClothingItem from '../../ClothingItem/ClothingItem'

const ItemDisplay = ({category}) => {

    const {item_list} = useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'> 
        <h2>Top trends near you</h2>
        <div className="item-display-list">
            {item_list.map((item,index)=>{
                {console.log(category,item.category);}

                if(category==="All" || category===item.category){
                    return<ClothingItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
                
            })}
        </div>
    </div>
  )
}

export default ItemDisplay