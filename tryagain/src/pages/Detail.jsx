import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/Products';
import {CgMathMinus, CgMathPlus} from "react-icons/cg"
import { productsCard } from '../redux/actions/Card';




const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
 
  const {product} = useSelector(state => state.product)
  
 const [count, setCount] = useState(0)

   const increment = ()=> {
    setCount(count +1)
   }
  
   const decrement = () =>{
    setCount(count-1)
   }



useEffect(()=>{
   dispatch(productsActionDetail(id) )
},[dispatch])


const addCard = ()=>{
  dispatch(productsCard(id, count))
  dispatch({type:"DRAWER", payload:true})
}
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"100px"}}>
      <img style={{width:"25%",marginRight:"70px"}}  src={product?.image} alt="" />
      <div style={{width:"75%"}}>
        <div style={{fontSize:"24px",fontWeight:"bolder"}}> {product.title} </div>
        <div style={{fontSize:"18px",opacity:"60%",width:"600px",position:"absolute", top:"270px", left:"600px"}}> {product.description} </div>
        <div style={{fontSize:"20px", position:"absolute", top:"150px", left:"600px", fontWeight:"bolder"}}> Category: {product.category} </div>
        <div style={{fontSize:"30px", fontStyle:"bold", fontWeight:"bolder", position:"absolute", top:"450px", left:"1000px"}}>  $ {product.price} </div>

        <div style={{display:"flex", padding:"3px", fontWeight:"bolder", position:"absolute", top:"390px", left:"600px",}}>
          <CgMathMinus onClick={decrement} style={{margin:"5px"}}/>
          <span style={{margin:"5px"}}> {count} </span>
          <CgMathPlus onClick={increment} style={{margin:"5px"}}/>
        </div>
   <button onClick={addCard} style={{ padding:"10px",backgroundColor:"darkblue",color:"white", position:"absolute", top:"450px", left:"600px",width:"390px", borderRadius:"10px"}}> SEPETE EKLE </button>
      </div>
    </div>
  )
}

export default Detail
