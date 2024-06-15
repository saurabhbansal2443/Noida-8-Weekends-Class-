import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  let [obj, setObj] = useState(null);
  let { id } = useParams();

  let getData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let objData = await data.json();
    setObj(objData);
  };

  useEffect(() => {
    getData();
  }, []);

  if(obj == null) return <></>

  let { thumbnail, title, category, price, rating, stock, brand } = obj;

  return (
    <div className="bg-base-200 w-screen h-[92vh] pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto ">
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
            <button className="btn btn-primary">BuyNow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
