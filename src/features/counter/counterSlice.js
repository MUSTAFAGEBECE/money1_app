import { createSlice } from '@reduxjs/toolkit'
import data from '../../data'
const initialState = {
  product:data,
  sepet:[],
  totalM:0,
  totalMiktar:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    remove:(state)=>{
        state.sepet=[]
        state.product=state.product.map((rm)=>{
            return(
                {...rm,amount:0}
            )
        })
    },
    increment: (state,action) => {
        const arti=state.product.find((ff)=>ff.id==action.payload.id)
        arti.amount+=1
       state.sepet=state.sepet.find((sp)=>sp.id===action.payload.id)?
       state.sepet.map((mpp)=>mpp.id===action.payload.id?{...mpp,amount:mpp.amount+1}:mpp)
       :[...state.sepet,{...action.payload,amount:1}]
        
    },
    decrement: (state,action) => {
      const eksi=state.product.find((df)=>df.id==action.payload.id)
      eksi.amount=eksi.amount>1 ? eksi.amount-1:0
      state.sepet=state.sepet.map((ssm)=>ssm.id===action.payload.id?
      {...ssm,amount:ssm.amount-1}:ssm).filter((sff)=>sff.amount>0)
    },
    totalPrice:(state,action)=>{
    state.totalM=state.sepet.reduce((acc,current)=>(acc+current.price*current.amount),0).toFixed(2)
    state.totalMiktar=state.sepet.reduce((acc,current)=>(acc+current.amount),0)

    
    },
    
  },
})


export const { increment, decrement,remove,totalPrice} = counterSlice.actions

export default counterSlice.reducer