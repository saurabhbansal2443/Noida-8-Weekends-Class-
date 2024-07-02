import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewComponent from "./ReviewComponent";
import { useDispatch  , useSelector} from "react-redux";
import { addCart } from "./utils/Store/CartSlice";
import useFindSingleProductData from "./utils/useFindSingleProductData";

const SingleProductPage = () => {
  
  let { id } = useParams();
  let [showIdx , setShowIdx ] = useState(null);

  let cartItems = useSelector((store)=>store.cart.items )

  let dispatch = useDispatch();

  let obj = useFindSingleProductData(id);

  if(obj == null) return <></>
  
  let { thumbnail, title, category, price, rating, stock, brand , reviews  } = obj;

  let checkInCart = ()=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.objData.id == id  );
    console.log(objIdx);
    return objIdx;
  }

  return (
    <div className="bg-base-200 w-screen h-[92vh] pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto ">
     { checkInCart() != -1 ? <div className="bg-orange-500 rounded-2xl absolute p-2 text-black font-bold top-3 left-4"> Added to cart </div> :null }
        <figure>
          <img src={thumbnail} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className="btn">
              Rating
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn">
             Category
              <div className="badge badge-secondary">{category}</div>
            </button>
            <button className="btn">
              Price
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn">
              Stock
              <div className="badge badge-secondary">{stock}</div>
            </button>
            <button className="btn">
              Brand
              <div className="badge badge-secondary">{brand}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>{dispatch(addCart(obj))}} >BuyNow</button>
          </div>
        </div>
      </div>

      {/*  Accordian  */}

      <div className="box h-1/3 w-3/4 bg-gray-300 mx-auto mt-24 rounded-3xl pt-6">
         {
          reviews.map((obj, idx) => {
            return (
              <ReviewComponent obj={obj} idx={idx}  showIdx={showIdx} setShowIdx={setShowIdx} key={idx}></ReviewComponent>
            )
          })
         }
      </div>
    </div>
  );
};

export default SingleProductPage;
