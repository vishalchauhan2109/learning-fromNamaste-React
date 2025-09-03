import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
const Header = () => {

    const data = useContext(UserContext);
    console.log(data)

    const[btnstate,setBtnstate] = useState("login");

    function handlebtn(){
        setBtnstate(data.loggedInUser)
    }
    return (
        <div className='Navbar-header bg-green-600 '>

            <div className="Nav-logo">
                <p className="logo">GOOD-FOOD</p>
            </div>

            <ul className='Nav-menu'>
                
                <li>
                    <Link className="link" to ="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to ="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to ="/contact">Contact us</Link>
                </li>
                <li>
                    <Link className="link" to ="/cart">Cart</Link>
                </li>
                <button className="button" onClick={handlebtn}>{btnstate}</button>
            </ul>

            

        </div>
    )
}

export default Header;