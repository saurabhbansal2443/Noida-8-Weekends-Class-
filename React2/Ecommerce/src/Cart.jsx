import React from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart  , sortAcsending , sortDesending} from "./utils/Store/CartSlice";

const Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);

  let dispatch = useDispatch();
  

  // console.log(cartItems)
  return (
    <div className="overflow-x-auto px-5 ">
      <table className="table ">
        <thead className="text-xl">
          <tr>
            <th>Name</th>
            <th> <span onClick={()=> dispatch(sortAcsending()) }> 🔼</span> <span className="px-1 text-2xl">Price</span> <span onClick={()=> dispatch(sortDesending()) }>🔽</span> </th>
            <th>Rating </th>
            <th>Quantity </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartObj) => <CartRow key={cartObj.objData.id} cartObj={cartObj}></CartRow>
          )}
          
        </tbody>
      </table>

      <div>
      <button className="btn btn-block" onClick={()=> dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
   
  );
};

export default Cart;
