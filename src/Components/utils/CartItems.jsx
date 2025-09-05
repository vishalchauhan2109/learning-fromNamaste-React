import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { PRO_IMG } from './constant'

const CartItems = ({data}) => {

    console.log(data)
  return (

    <div>
        <div className="cart-list">

            <div className="image">
                <img className='img-cart' src={PRO_IMG +data.card.info.imageId } alt="" />
            </div>
            <div className='cart-name'>
                <h4 className="">{data.card.info.name}</h4>
            </div>
            <div className="add-items">
                <FiPlus />
                <h4 className="item-count">{data.card.info.length}</h4>
                <FiMinus />
            </div>
            <h4>₹ {data.card.info.price/100 || data.card.info.defaultPrice/100}</h4>

            
        </div>

       
    </div>    
  )
}

export default CartItems