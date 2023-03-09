import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/actions/Card';

const Card = () => {

 const dispatch = useDispatch();
 const {cardItems} = useSelector(state => state.card)
 console.log(cardItems)

 const deleteCard = (id)=>{
    dispatch(removeCart(id))
 }

  return (
    <div style={{position:"absolute" ,right:"0px" ,top:"0px", minWidth:"400px" ,minHeight:"400px",border:"1px solid black",backgroundColor:"white" }}>
      <h1 style={{padding:"10px"}}>SEPETİM</h1>
      <br />
      <AiOutlineCloseCircle style={{position:"absolute", left:"370px",top:"20px"}} onClick={()=>dispatch({type:"DRAWER", payload:false})}/>
 
      {
        cardItems.map((card, i) => (

           
      <div key={i} style={{display:"flex" , alignItems:"center", justifyContent:"space-between" ,borderBottom:"1px solid gray"}} >
      <img style={{width:"150px", height:"150px",marginBottom:"10px"}}  src={card.image} alt="" />

      <div style={{alignItems:"center", justifyContent:"space-between", width:"200px"}}>
          <div>{card.title} ({card.qty}) </div>
          <div style={{fontSize:"10px", opacity:"50px",marginTop:"5px"}}>{(card.description).substring(0,60)}</div>
          <div style={{marginTop:"5px"}}> {card.price} TL </div>
      <button  onClick={()=> deleteCard(card.id)}  style={{ minWidth:"170px",height:"35px" , fontSize:"24px", backgroundColor:"darkblue",color:"white",borderRadius:"10px",marginTop:"10px",borderBottom:"1px solid black"}}>SİL</button>
      </div>
    
    </div> 
        ))
      }


   
    </div>
  )
}

export default Card
