import React from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Components/Product";
import CartItems from "./Components/utils/CartItems";
import { clearCart } from "./Components/utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());

    }

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (



        <div className="cart">

            <div className="cart-div">
                {
                    cartItems.map((items) => (
                        <CartItems data={items} />
                    ))


                }

                {
                (cartItems.length  > 0)?null:
                <div className="top-cart">
                    <h1>Cart is Empty 😱</h1>
                    <h1>Have some Food🍕</h1>
                </div>
                }
                

                {

                    (cartItems.length > 0) ?
                        <button className='button' onClick={handleClearCart}>Clear Cart</button> : null
                }


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