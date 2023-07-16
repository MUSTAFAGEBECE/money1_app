import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,remove,totalPrice } from '../features/counter/counterSlice'
import "./header.css"
const Header=({money})=>{
  const totalM=useSelector((state) => state.counter.totalM)
  
    
    return(
        <div className="header">
          {
            money-totalM>0?<h1>Harcamak için {(money-totalM).toFixed(2)}TL paranız var</h1>:<h1>Paranız Bitti</h1>
          }
         
        </div>
    )
}

export default Header