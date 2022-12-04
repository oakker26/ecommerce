import React from 'react'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireWorks } from '../lib/utils'
const Success = () => {
     const { setCartItems,setTotalPrice,setTotalQuantities }=useStateContext()
     useEffect(() => {
          localStorage.clear();
          setCartItems([])
          setTotalPrice(0 )
          setTotalQuantities(0)
          runFireWorks
     },[])
  return (
       <div className='success-wrapper'>
            <div className='success'>
                 <p className='icon'>
                      <BsBagCheckFill/>
                 </p>
                 <h2>Thanks for order</h2>
                 <p className='email-msg'> Check your email for the product</p>
                 <p className='description'>
                      If u have ques,please email
                      <a className='email' href="mailto:kwikwi@example.com">
                      kwikwi@example.com
                      </a>
                 </p>
                 <Link href="/">
                      <button type='button' width="300px" className='btn'>
                         Next Order
                      </button>
                 </Link>
            </div>
    </div>
  )
}

export default Success