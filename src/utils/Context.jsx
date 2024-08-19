import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();  

const Context = (props) => {
    const [products, setproducts] = useState(null)

    const getproduct = async () => {
        try{
            const {data} = await axios('/products')
            //store product data , can access across the application
            setproducts(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
      getproduct(); 
    }, [])
    

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
