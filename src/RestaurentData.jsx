import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdDeliveryDining, MdOutlineMenuBook } from "react-icons/md";
import Shimmar from "./Shimmar";
import { Fetchapi, RECO_IMG } from "./Components/utils/constant";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
// import Recommand from "./Recommand";
// import { resData } from "./Components/utils/data";

const RestaurentData = () => {
    const { resId } = useParams();
    console.log(resId);

    const resinfo = useFetch(resId);
    console.log(resinfo)
    if (resinfo === null) {
        return (
            <Shimmar />
        )

    }
    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines,sla } = resinfo.data?.cards[2]?.card?.card.info
    // console.log( resinfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.item
    // Cards);
    
    return (
        <div className="restaurent">
            <h1>{name}</h1>

            <div className="delivery-div">

                <div className="div-1">
                    <span className="rati div-line"><FaStar className="star2" /> {avgRating} ({totalRatingsString}) <span className="cft">{costForTwoMessage}</span></span>
                    <u className="div-line"><span className="cous" >{cuisines.join(",")}</span></u>
                    <span className="div-line ">Outlet <span className="out-add">{resinfo.data?.cards[2]?.card?.card.info.labels[1].message}</span></span>
                    <span className="d-time div-line"><MdDeliveryDining /> {sla.slaString} mins</span>

                </div>

                {/* <div className="div-2">
                    <span className="one">one</span>
                    <span className="offer">{resinfo.loyaltyDiscoverPresentationInfo?.freedelMessage}</span>
                </div> */}
            </div>
            <div className="menu-top">
                <div className="menu-text"> <MdOutlineMenuBook className="menu-icon" /><h1>menu</h1></div>
            </div>

            {

                resinfo.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[4]?.card.card?.itemCards.map(item => (

                    <div className="res-menu" key={item.card.info.id}>
                        <div className="text-recc">
                            <FaRegCircleDot />

                            <h3>{item.card.info.name}</h3>
                            <h3>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                            <h3><FaStar className="star2" /> {item.card.info.ratings.aggregatedRating.rating}</h3>
                            <h4 className="description">{item.card?.info?.description?.split('(' || '&')[0].trim()};</h4>
                        </div>
                        <div className="img-div">
                            <img className="dish-img" src={RECO_IMG + item.card.info.imageId} alt="image" />
                            <button className="add-btn">Add</button>
                        </div>

                    </div>

                ))
            }


        </div>
    )
}

export default RestaurentData