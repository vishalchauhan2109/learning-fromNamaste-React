import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdDeliveryDining, MdOutlineMenuBook } from "react-icons/md";
import Shimmar from "./Shimmar";
import { Fetchapi, RECO_IMG } from "./Components/utils/constant";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import Accoridan from "./Components/Accordian";
// import Recommand from "./Recommand";
// import { resData } from "./Components/utils/data";

const RestaurentData = () => {

    const [showIndex,setShowIndex] = useState(null);
    const { resId } = useParams();
    console.log(resId);

    const resinfo = useFetch(resId);
    
   
    if (resinfo === null) {
        return (
            <Shimmar />
        )

    }
    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines,slugString ,sla} = resinfo.data?.cards[2]?.card?.card.info
    // console.log(resinfo.data?.cards[2]?.card?.card.info )
    

    const rescards = resinfo.data.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
        (data)=>data.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        
    )
    console.log(rescards);


    
    return (
        <div className="restaurent">
            <h1 className="h1">{name}</h1>

            <div className="delivery-div">

                <div className="div-1">
                    <span className="rati div-line"><FaStar className="star2" /> {avgRating} ({totalRatingsString}) <span className="cft">{costForTwoMessage}</span></span>
                    <u className="div-line"><span className="cous" >{cuisines.join(",")}</span></u>
                    <span className="div-line ">Outlet </span><span className="out-add">{slugString}</span>
                    <span className="d-time div-line"><MdDeliveryDining /> {sla.slaString} mins</span>

                </div>

                {/* <div className="div-2">
                    <span className="one">one</span>
                    <span className="offer">{resinfo.loyaltyDiscoverPresentationInfo?.freedelMessage}</span>
                </div> */}
            </div>
            <div className="menu-top"> 
                <div className="menu-text"> <MdOutlineMenuBook className="menu-icon"/><h1>menu</h1></div>
            </div>
            
           {
            rescards?.map((newRes,index)=>

            <Accoridan key={newRes.card.card.categoryId} 
            newRes={newRes}
            accordian={index === showIndex ? true:false}    
            setShowIndex = {()=>{
                setShowIndex(null)
                setShowIndex(index)
            }}
            
            />)
           }
        </div>
    )
}

export default RestaurentData