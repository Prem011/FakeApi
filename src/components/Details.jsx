import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { useEffect } from 'react';
import axios from '../utils/axios';
import Loading from './Loading';

const Details = () => {

  const [product, setproduct] = useState(null)
 
  const { id } = useParams();
  console.log(id)
  

  const getSingleProduct = async () => {
    try{
      const {data} = await axios.get(`/products/${id}`)
      // console.log(data)
      setproduct(data);      
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getSingleProduct();
  }, []);

  return product ? (
    <div className='w-[80%] h-screen mx-auto flex justify-center items-center' >
      <img className='w-[28%] mx-10'  src={`${product.image}`} alt="" />
      <div className='content w-[40%] max-h-max  py-[10%]' >
        <h1 className='text-4xl mb-[1%]' >{product.title}</h1>
        <h3 className='font-medium text-zinc-700 mb-[1%]' >{product.category}</h3>
        <h3 className=' text-zinc-950 mb-[1%] font-bold' >${product.price}</h3>
        <h4 className='mb-[4%]'>{product.description}</h4>
        <Link className='bg-blue-300 px-6 py-3 shadow-lg text-black rounded-md mr-4 ' >Edit</Link>
        <Link className='bg-red-300 px-6 py-3 shadow-lg text-black rounded-md' >Delete</Link>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Details
