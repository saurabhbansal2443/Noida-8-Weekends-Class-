import React from 'react'

const AddedProductInCart = (Component ) => {
  return (props)=>{
    return (
    <div>
    <div className="bg-orange-500 rounded-2xl w-20 relative top-9   p-2 text-black font-bold top-10 z-20 left-4"> Added to cart </div>
    <Component {...props}> </Component>
    </div>
    )
  }
}

export default AddedProductInCart
