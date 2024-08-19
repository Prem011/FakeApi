import React, { useEffect } from 'react'
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import { useState } from 'react';
import axios from '../utils/axios';

function Home() {


  const [products] = useContext(ProductContext)
  //search url m jo categories hai yaha s milegi 
  const {search} = useLocation()
  // console.log(search); //?category=electronics, ?category=women%27s%20clothing
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);//women's clothing
// , electronics

  const [filterProducts, setfilterProducts] = useState(null)  

  const getproductscategory = async () => {
    try{
      const {data} = await axios.get(`/products/category/${category}`)
      setfilterProducts(data)
    }catch(e){
      console.log(e);
      
    }
  }

  useEffect(()=>{
    if(!filterProducts || category == "undefined") setfilterProducts(products);
    if(category != "undefined") getproductscategory();
  }, [category, products])

  return products ?
  (
   <>
        <Nav/>         

         <div className='h-full relative py-[3%] w-[85%] flex flex-wrap overflow-x-hidden overflow-y-scroll'>


        {filterProducts &&
         filterProducts.map((p, i) => (

          
          <Link key={p.id} to={`/details/${p.id}`} className='card w-[18%] h-[35%] border border-spacing-2 border-zinc-400 mt-5 mx-3'>

          <div
           className='w-[80%] h-[75%] position-center bg-no-repeat bg-contain bg-center mx-[10%] my-3  hover:scale-105'
            style={
              {
                backgroundImage:`url(${p.image})`
              }
            } >
            
          </div>

          <h3 className='title text-zinc-950 text-center font-semibold hover:text-zinc-700 '>{p.title}</h3>
        </Link >
       
        ))}        
    
      </div>
   </> 
  ) : (
    <Loading />
  )
} 

export default Home
