import React from "react";
import { removeCart  , incrementQuantity , decrementQuantity} from "./utils/Store/CartSlice";
import { useDispatch } from "react-redux";


const CartRow = ({ cartObj }) => {
  console.log(cartObj);
  let { objData, quantity } = cartObj;
  let { thumbnail, title, rating, price , id  } = objData;

  let dispatch = useDispatch();


  return (
    <tr className="text-xl">
      <td>
        <div className="flex items-center gap-3 ">
          <div className="avatar">
            <div className="mask mask-squircle h-20 w-20 bg-white">
              <img src={thumbnail} alt="Item image " />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td> $  { price}</td>
      <td>{rating}</td>
      <td><span onClick={()=>{dispatch(incrementQuantity(id))}} > 🔼</span> <span className="px-1 text-2xl">{quantity}</span> <span onClick={()=>{dispatch(decrementQuantity(id))}}>🔽</span></td>
      <th>
        <button className="btn btn-outline btn-error" onClick={()=> dispatch(removeCart(id))}>Remove Item </button>
      </th>
    </tr>
  );
};

export default CartRow;
