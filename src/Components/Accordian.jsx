
import React, { useState } from "react";
import { FaChevronUp, FaStar } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { RECO_IMG } from "./utils/constant";
import { IoIosArrowDown } from "react-icons/io";
// import { useParams } from "react-router-dom";
// import { useFetch} from "./useFetch"


const Accoridan =({newRes})=>{

    const [accordian, setAccordian] = useState(false);

    const handleAccordian =()=>{
        setAccordian(!accordian);

        // if(accordian){
        //     document.getElementsByClassName("accordian-data").

        // }
    }


    
    
    return(
        <div>
            {/* Accodian Header */}

            


            <div className="accordian bg-red-600   " onClick={handleAccordian}>

            
                <div className="header-left">
                    <h3>{newRes.card.card.title}</h3>
                    <h3 className="items"> ({newRes.card.card.itemCards.length})</h3>
                </div>

                <div className="header-right">
                   { !accordian?
                        <h4><IoIosArrowDown /></h4>
                    :
                        <h4><FaChevronUp/></h4>
                   }

                    
                    
                </div>




            </div>

            
            {/* Accordian data */}
            

            {
           !accordian ?null : 
                newRes.card?.card?.itemCards?.map(item => (

                    <div className=" res-menu" key={item.card.info.id}>
                        <div className="text-recc">
                            <FaRegCircleDot />

                            <h3>{item.card.info.name}</h3>
                            <h3>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                            <div className="div-rating"><FaStar className="star2" /> <h3>{item.card.info.ratings.aggregatedRating.rating}</h3></div>
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
export default Accoridan;