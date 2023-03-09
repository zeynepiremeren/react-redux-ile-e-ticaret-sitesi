import React, { useEffect, useState } from 'react'
import { BsLightbulb,  BsFillBasketFill, BsLightbulbFill, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/Search';



const Navbar = () => {
 
    const [color, setColor]= useState(false)
    const dispatch = useDispatch()
    const {cardItems} = useSelector(state => state.card)
    const [search, setSearch] = useState("")

     useEffect(()=>{
       const root = document.getElementById("root")
        
       if(color){
        root.style.backgroundColor = "black"
        root.style.color= "white"
       }
       else{
        root.style.backgroundColor = "white"
        root.style.color = "black"
       }
     },[color])

   const searchPost = (e)=>{
    if(e.key === "Enter"){
        dispatch(searchAction(search))
    }
   }
  return (
   <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between", padding:"2%"}}>
    <div style={{fontSize:"32px", fontWeight:"bolder"}}>E-commerce</div>
    <input style={{width:"500px",height:"40px", border:"1px solid lightGray", borderRadius:"5px",paddingLeft:"15px"}} value={search} onClick={searchPost}  onChange={e => setSearch(e.target.value)} type="text"placeholder='search' />
    <div onClick={()=> setColor(!color)} style={{display:"flex", alignItems:"center", }}>
       
        {
            color ? <BsLightbulb size={25} style={{margin:"10px",cursor:"pointer"}} /> : <BsLightbulbFill size={25} style={{margin:"10px",cursor:"pointer"}} />
        }
        </div>
        
        <div onClick={()=>dispatch({type:"DRAWER", payload:true})} className="relative">
          <BsFillBasketFill style={{margin:"10px", cursor:"pointer"}} size={25}/>
          <span className='span' style={{padding:"5px", fontSize:"24px" ,color:"red", borderRadius:"100%", position:"absolute", top:"15px", right:"180px", fontWeight:"bold"}}>{cardItems.length}</span>
        </div>
    
   </div>
  )
}

export default Navbar
