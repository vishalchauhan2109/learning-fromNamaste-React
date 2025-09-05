
import React, { useState } from "react";
import { FaChevronUp, FaStar } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { RECO_IMG } from "./utils/constant";
import { IoIosArrowDown } from "react-icons/io";


// import Conform from "./utils/Conform";
// import ConformOrder from "./utils/Conform-order";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useFetch} from "./useFetch"
import {addItems} from './utils/cartSlice' 



const Accoridan = ({ newRes, accordian,  setShowIndex }) => {


    const[disp,setDisp] = useState(null)

    const dispatch = useDispatch()
    const Handlecart = (item1) => {
        //dispatch an action
        dispatch(addItems(item1))
        // console.log(item1)
    }

    //we have useSelector hook for reading similarly useDispatch for dispatching
    
   

    const Conform = () =>{
        setDisp()
        console.log(disp);

    }


    const { title, itemCards } = newRes.card.card

    const handleAccordian = () => {

        //  lifting state up
        setShowIndex()

    }

    return (
        <div >
            {/* Accodian Header */}

            <div className="accordian bg-red-600   " onClick={handleAccordian}>


                <div className="header-left">
                    <h3>{title}</h3>
                    <h3 className="items"> ({itemCards.length})</h3>
                </div>

                <div className="header-right">
                    {!accordian ?
                        <h4><IoIosArrowDown /></h4>
                        :
                        <h4><FaChevronUp /></h4>
                    }



                </div>

            </div>


            {/* Accordian data */}
            {
                !accordian ? null :
                    itemCards?.map(item => (

                        <div className=" res-menu" key={item.card.info.id}>
                            <div className="text-recc">
                                <FaRegCircleDot />

                                <h3>{item.card.info.name}</h3>
                                <h3>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                                <div className="div-rating"><FaStar className="star2" /> <h3>{item.card.info.ratings.aggregatedRating.rating}</h3></div>
                                <h6 className="description">{item.card?.info?.description}</h6>
                            </div>

                            
                            {/* conform portion after click add btn */}
                            {/* {
                            !disp ? null :
                            <ConformOrder item1={item} />
                           }
 */}

                            <div className="img-div">
                                <img className="dish-img" src={RECO_IMG + item.card.info.imageId} alt="image" />
                                <button className="add-btn" onClick={()=>Handlecart(item) }>Add</button>
                            </div>

                            
                        </div>
                        

                    ))
            }





        </div>
    )
}
export default Accoridan;