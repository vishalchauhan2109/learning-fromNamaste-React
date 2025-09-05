import React, { useEffect, useState } from "react";
// import Search from "./Filterbtn";
// import { resData } from "../Components/utils/data    "
import Product from "../Components/Product"
import Shimmar from "../Shimmar";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import useOnlinestatus from "./utils/useOnlinestatus";
import OnlineStatus from "./utils/OnlineStatus";


const Body = () => {

    const [newresData, setNewresdata] = useState([])
    const [copynewresdata, setCopynewresdata] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4948284&lng=77.3285082&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        // console.log(data);
        const json = await data.json();
        console.log(json)

        // 

        //optional Chaining
        setNewresdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(setNewresdata)
        setCopynewresdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }


    // console.log(newresData.length);
    const [addfilter, setAddfilter] = useState("");

    const status = useOnlinestatus();

    if(status === false){
        return(
            <OnlineStatus/>
        )
    }
     
    return (
        !newresData || newresData.length === 0 ? <Shimmar /> :

            <div className="body">


                <div className="search">
                    <button className= ' filter-top-rated' onClick={() => {

                        const setdata = newresData.filter(
                            (res) => res.info.avgRating > 4.3
                        )
                        setCopynewresdata(setdata);
                        // console.log({ newresData })
                    }}>Top Rated Restaurent</button>

                    <div className="search-div2">
                        <input className="input-box" type="text" value={addfilter} onChange={
                            (e) => {
                                setAddfilter(e.target.value)
                            }
                        }
                        />
                        <FcSearch className="search-icon" onClick={() => {
                            const newfilterlist = newresData.filter(
                                (res) =>res.info.name.toLowerCase().includes(addfilter.toLowerCase())
                            )
                            setCopynewresdata(newfilterlist)

                            console.log(addfilter)
                            // console.log(newfilterlist)

                        }} />
                    </div>

                </div>


                <div className="res-list">
                    {
                        copynewresdata.map((items) => (
                            <Link className="link" key={items.info.id} to={/restaurent/+items.info.id}>
                               
                                <Product resData={items} key={items.info.id} />
            

                            </Link>
                        ))
                    }

                </div>



            </div>
    )

}
export default Body;