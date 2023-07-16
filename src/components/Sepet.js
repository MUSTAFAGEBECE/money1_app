import React, { useEffect } from "react";
import Spt from "./Spt";
import { useSelector, useDispatch } from 'react-redux'
import "./sepet.css"
import { decrement, increment,remove,totalPrice } from '../features/counter/counterSlice'
const Sepet=()=>{
    const sepet = useSelector((state) => state.counter.sepet)
    const totalM=useSelector((state) => state.counter.totalM)
    const totalMiktar=useSelector((state) => state.counter.totalMiktar)
    const dispatch = useDispatch()
   
    return(
      
        <div className="sepet">
        
          <h2>Alışveriş Detayları</h2>
            {
              sepet.map((sp)=>{
                return(
                    <Spt sp={sp}/>
                )
              })  
            }
           
             <h2>Toplam Fiyat: {totalM} TL</h2>
             <h3>Toplam Miktar:{totalMiktar}</h3>
           {
            totalMiktar>0&&<button onClick={()=>dispatch(remove())}>SEPETİ SIFIRLA</button>
           } 
             
            
            
          
        </div>
       
    )
}

export default Sepet