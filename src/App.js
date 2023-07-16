import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Product from './components/Product';
import Sepet from './components/Sepet';
import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment,remove,totalPrice} from './features/counter/counterSlice'
function App() {
  const [money,setMoney]=useState(4000000)
  const sepet = useSelector((state) => state.counter.sepet)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(totalPrice())
   
   },[sepet])
  return (
    <div className="App">
     <Header money={money}/>
     <Product/>
    <Sepet/>
    
     
    </div>
  );
}

export default App;
