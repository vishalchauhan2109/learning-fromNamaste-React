import React, { useState } from 'react'



const Userfun = (props) => {
  const[count,setCount] = useState(0)
const[count2,setCount2] = useState(1)
  return (
    <div>
      
      <h1>i am function Component</h1>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Userfun
