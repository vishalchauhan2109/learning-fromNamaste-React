import React from "react";
import { FaStar } from "react-icons/fa";
import { PRO_IMG } from "./utils/constant";

const Product = ({resData}) => {
    // const  = props;
    
    const{cloudinaryImageId,name,avgRating,deliveryTime,cuisines,locality} = resData?.info;
    
    return (
        <div className="product">
            <img className="prod-img" 
            src=
            {PRO_IMG+ cloudinaryImageId} alt="image" />
            <div className="img-down">
                <h3>{name}</h3>
                <div className="ratings">{avgRating}<FaStar className="star" /></div>
            </div>
            <p className="food-item">{cuisines.join(" ,")}</p>
            <p className="time">{deliveryTime}min</p>
            <p className="time">{locality}</p>

        </div>
    )
}
export default Product