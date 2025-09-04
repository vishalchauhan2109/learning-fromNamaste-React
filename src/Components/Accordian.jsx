
import React, { useState } from "react";
import { FaChevronUp, FaStar } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { RECO_IMG } from "./utils/constant";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItems } from "./utils/cartSlice";
// import { useParams } from "react-router-dom";
// import { useFetch} from "./useFetch"


const Accoridan = ({ newRes, accordian, index, setShowIndex }) => {


    const[disp,setDisp] = useState(false)

    //we have useSelector hook for reading similarly useDispatch for dispatching
    const dispatch = useDispatch()
    const Handlecart = (item) => {
        //dispatch an action
        dispatch(addItems(item))
        console.log(item)
    }

    const Conform = () =>{
        setDisp(true)
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

                            !disp?null:{
                             <div className="conform-main overlay ">
                                <div className="conform">
                                    <h4 className="add-to-cart">Add this item to your cart</h4>
                                    <div className="btns">
                                        <button className="conform-btn cancle">Cancle</button>
                                        <button className="conform-btn" onClick={() => Handlecart(item)}>Add</button>
                                    </div>
                                </div>
                            </div>
}
                           


                            <div className="img-div">
                                <img className="dish-img" src={RECO_IMG + item.card.info.imageId} alt="image" />
                                <button className="add-btn" onClick={Conform} >Add</button>
                            </div>

                            
                        </div>
                        
                        

                    ))
            }





        </div>
    )
}
export default Accoridan;