import React from 'react'
import { useDispatch, useSelector } from 'react-redux'; 

const ConformOrder = (item1) => {
    // console.log(item1)
    
    

    const select = useSelector((store)=>store.cart.items)
    console.log(select)


    return (

        

        !item1 ? null :
        <div>
            {
                 <div className="conform-main overlay ">
                    <div className="conform">
                        <h4 className="add-to-cart">Add this item to your cart</h4>
                        <div className="btns">
                            <button className="conform-btn cancle">Cancle</button>
                            <button className="conform-btn" onClick={() => }>Add</button>
                        </div>
                    </div>
                </div>


            }
        </div>
    )
}

export default ConformOrder
