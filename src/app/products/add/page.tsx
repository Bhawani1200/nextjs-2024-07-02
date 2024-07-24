import React from 'react'

import { ToastContainer } from 'react-toastify'
import AddProductForm from './_components/Form'

export default function AddProduct() {
  return (
    <div className='flex justify-center'>
   <AddProductForm/>
   <ToastContainer/>
    </div>
  )
}
