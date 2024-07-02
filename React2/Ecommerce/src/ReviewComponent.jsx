import React from 'react'

const ReviewComponent = ({obj , idx , showIdx , setShowIdx }) => {
    let {comment ,reviewerName  , rating } = obj 
   
  return (
    <div className="  w-3/4 mx-auto ">
       <div className="titlebox h-16  bg-gray-500  rounded-2xl flex justify-between px-3  items-center text-2xl text-black">
          <p>{reviewerName} </p> <p onClick={()=> setShowIdx(showIdx== idx ? null : idx)}> 🔼 </p>
          </div>
         {
            showIdx == idx ?  <div className="comment h-14  bg-gray-400   mx-auto rounded-2xl flex justify-between px-7  items-center text-2xl text-black">
            <p> {comment} </p> <p> {rating} </p>
            </div> : <></>
         }
    </div>
  )
}

export default ReviewComponent
