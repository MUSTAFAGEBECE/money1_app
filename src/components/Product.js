import React from "react";
import Prd from "./Prd";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
import "./product.css"
const Product=()=>{
    const product = useSelector((state) => state.counter.product)
  const dispatch = useDispatch()
    return(
        <div className="product">
            {
                product.map((pr)=>{
                    return(
                        <Prd pr={pr}/>
                    )
                })
            }
        </div>
    )
}  

export default Product