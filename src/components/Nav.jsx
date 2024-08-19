import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './../utils/Context';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

  const [products] = useContext(ProductContext)

  let distinct_category = products && products
  .reduce((acc, cv) => [...acc, cv.category], [] );//acc = accumulator , cv = current value
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() *255).toFixed()}, ${(Math.random() *255).toFixed()}, ${(Math.random() *255).toFixed()}, 0.4)`
  }

  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center py-3' >

      

        <a className='bg-blue-100 px-6 py-3 shadow-lg text-black rounded-md' href="/create">Add new Product</a>
        <hr className='w-[80%] bg-black my-4' />
        <h2 className='mb-5 text-xl font-semibold w-[80%]' >Category Filter</h2>
        <div className='w-[80%]'>
          {distinct_category.map((c, i) => (

            <Link key={i} to={`/?category=${c}`} className='mb-2 hover:bg-zinc-200 w-[100%] my-4 py-0.5 px-1.5 rounded-sm' >
            <span style={{backgroundColor: color()}} className='inline-block w-[15px] h-[15px] rounded-full' />{" "}
            {c}
            <br/>
            </Link>

          ))}
          
         
        </div>


      </nav>
  )
}

export default Nav
