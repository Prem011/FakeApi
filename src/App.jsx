import React from 'react'
import Home from './components/Home';
import Details from './components/Details';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {

  const { pathname, search } = useLocation();

  return (
    <div className='w-screen h-screen flex'>

      {(pathname != "/" || search.length > 0) && (
      <Link to={"/"} className='text-black font-normal left-[13.5%] -top-[2%] p-2 absolute bg-red-300 m-10 rounded-md shadow-lg'>Home</Link>
      )} 


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>

    </div>
  )
}

export default App


