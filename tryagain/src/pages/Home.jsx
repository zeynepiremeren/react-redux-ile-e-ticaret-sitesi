import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import { productsAction } from '../redux/actions/Products';
import { searchAction } from '../redux/actions/Search';

const Home = () => {

  const dispatch = useDispatch()
   
  const {products}= useSelector(state => state.products);
  const {search}= useSelector(state => state.search);


  useEffect(()=> {
   dispatch(productsAction())
   dispatch(searchAction())
  },[dispatch])


  console.log(products)
  return (
    <div style={{display:"flex",flexWrap:"wrap", alignItems:"center" ,justifyContent:"center"}}>
     {

      search.length > 0 ?
      search.map((prd, i)=>(
        <ProductCard  key={i} prd={prd}  />
      )) :
      products && products.map((prd, i)=>(
        <ProductCard  key={i} prd={prd}  />
      ))
     }
    </div>
  )
}

export default Home
