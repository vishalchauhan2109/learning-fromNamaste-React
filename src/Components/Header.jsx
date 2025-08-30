import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const[btnstate,setBtnstate] = useState("login");
    return (
        <div className='Navbar'>

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
                <button className="button" onClick={()=>{
                       btnstate ==="login"? setBtnstate("logout"):setBtnstate("login")
                       console.log(btnstate)
                } 
                }>{btnstate}
                </button>
            </ul>

            

        </div>
    )
}

export default Header;