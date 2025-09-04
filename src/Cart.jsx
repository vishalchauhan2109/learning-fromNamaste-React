import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";


const Cart = () => {

    return (
        <div className="cart">
            <div className="cart-div">

                <div className="top-cart">

                    <div className="image-cart">
                        image
                    </div>

                    <div className="cart-res-name">
                        <h2>name</h2>
                        <h4 className="">address</h4>

                    </div>

                </div>

                <div className="cart-list">
                    <div>
                        <h4 className="">name</h4>
                    </div>
                    <div className="add-items">
                        <FiPlus />
                        <h4 className="item-count">count</h4>
                        <FiMinus />
                    </div>
                    <h4>price</h4>
                </div>

                <div className="check-box">
                    <input type="checkbox" className="checkbox" />
                    <h4 className="non-contact"><strong>Opt in for No-contact Delivery <br /></strong>
                        Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</h4>
                </div>

                <div className="savings-cart">
                    <div className="item-totals">
                      
                        <h4>SAVINGS</h4>
                        <h4>price</h4>
                     
                    </div>

                </div>

                <div className="bill-cart">
                    <h4><strong>Bill Details</strong></h4>

                    <div className="item-total">
                        <h4>item Total</h4>
                        <h4>price</h4>
                    </div>
                    <div className="item-total">
                        <h4>Delivery |{"km"}</h4>
                        <h4>price</h4>
                    </div>
                    <hr />
                    
                    <div className="item-total">
                        <h4>GST & Other Charges</h4>
                        <h4>price</h4>
                    </div>

                    <hr />

                     <div className="item-total">
                        <h4>TO PAY</h4>
                        <h4>price</h4>
                    </div>
                    
                    
                    
                </div>

            </div>

        </div>
    )
}
export default Cart