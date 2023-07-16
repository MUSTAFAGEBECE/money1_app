import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {  increment,decrement} from '../features/counter/counterSlice'
import "./product.css"
const Prd=({pr})=>{
    
  const dispatch = useDispatch()
    return(
        <div className="pr-div">
            <img src={pr.image}/>
            <h1>{pr.title}</h1>
            <p>Fiyat:{pr.price}</p>
            <div className="pr-hes">
            <button onClick={()=>dispatch(decrement(pr))}>Sat</button>
            <p>Miktar:{pr.amount}</p>
            <button onClick={()=> dispatch(increment(pr))}>Satın Al</button>
            </div>
            

        </div>
    )
}
export default Prd