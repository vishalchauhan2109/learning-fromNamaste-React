import { useEffect, useState } from "react";
import { Fetchapi } from "./Components/utils/constant";
import { useParams } from "react-router-dom";


export const useFetch = (resId) => {

    const [resval, setResval] = useState(null)
    // const [  redata, setRedata] = useState([]);



    // console.log("hii");

    useEffect(() => {
        fetchdata();
        console.log("hii")

    }, []);
    const fetchdata = async () => {

        const data = await fetch(`https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4948284&lng=77.3285082&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
          
        const json = await data.json();
        console.log("hii");

        console.log(json);

        setResval(json)

        //   setRedata(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }



    // console.log(resval)

    return resval;

}