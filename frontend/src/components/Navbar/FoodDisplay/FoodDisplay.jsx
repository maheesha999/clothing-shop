import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../../context/StoreContext';
import FoodItem from '../../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    console.log("Current category:", category); // Debug
    console.log("Food list:", food_list); // Debug

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category.toLowerCase() === item.category.toLowerCase()) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null; // Fallback
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
