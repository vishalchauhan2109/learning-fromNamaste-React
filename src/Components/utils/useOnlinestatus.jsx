import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {
  
  const [online,setOnline] = useState(true);

  useEffect(()=>{
    window.addEventListener("offline", () => {
        setOnline(false);
    })

        window.addEventListener("online", () => {
        setOnline(true);
    })
  })
  
    return online;
}

export default useOnlinestatus
