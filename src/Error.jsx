import React from "react";

import { useRouteError } from "react-router-dom";


const Error = ()=>{

    const Err = useRouteError();
    console.log(Err);
    return(
        <div className="error">

            <img className="image-error" src="https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.webp?a=1&b=1&s=612x612&w=0&k=20&c=KBXCXGD6GERO-FBl26yyhvTub3H85GYTgnktDqVOzyg=" alt="imag" />

            <h1>{Err.status} : {Err.statusText}</h1>
            <h2>{Err.data}</h2>

        </div>
    )
}

export default Error