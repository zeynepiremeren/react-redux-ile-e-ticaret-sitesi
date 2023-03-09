import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div >
        <div style={{display:"flex", minWidth:"250px", minHeight:"20px", borderRadius:"5px",border:"1px solid black", margin:"20px",}}>
      <img onClick={()=> window.location = `detail/${prd.id}`} src={prd?.image} alt="" style={{height:"100px", width:"100px",margin:"100px",}} />
      <div style={{height:"20px", width:"200px",margin:"1px",fontSize:"12px", }}>{prd?.title}</div>
      <div style={{height:"20px", width:"200px",margin:"1px",fontSize:"9px"}}>{prd?.price}</div>
      <div style={{height:"20px", width:"100px",margin:"1px",fontSize:"12px",backgroundColor:"green",color:"white",display:"flex",alignItems:"center"}}>SEPETE EKLE</div>
    </div>
    </div>
  )
}

export default ProductCard
