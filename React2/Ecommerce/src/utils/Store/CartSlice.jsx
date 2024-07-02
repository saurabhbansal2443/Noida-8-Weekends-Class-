import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      let data = action.payload;
      let objId = data.id;
      let obj = state.items.find(
        // taking out the index
        (cartObj) => cartObj.objData.id === objId
      );

      if (obj) {
        // case where obj is present
        obj.quantity = obj.quantity + 1;
      } else {
        let cartObj = { objData: data, quantity: 1 };
        state.items.push(cartObj);
      }
    },
    removeCart: (state, action) => {
      let id = action.payload;

      let objIdx = state.items.findIndex(
        (cartObj) => cartObj.objData.id === id
      );
      state.items.splice(objIdx, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementQuantity : (state , action)=>{
      let objId = action.payload;
      let obj = state.items.find(
        (cartObj) => cartObj.objData.id === objId
      );
      obj.quantity = obj.quantity + 1;
    },
    decrementQuantity : (state , action)=>{
      let objId = action.payload;
      let obj = state.items.find(
        (cartObj) => cartObj.objData.id === objId
      );
      if(obj.quantity ==1 ){
        let objIdx = state.items.findIndex(
          (cartObj) => cartObj.objData.id === objId
        );
        state.items.splice(objIdx, 1);
      }else{
        obj.quantity = obj.quantity - 1;
      }
    },
    sortAcsending : (state , action)=>{
      state.items.sort((a,b)=> a.objData.price - b.objData.price);
    },
    sortDesending : (state , action)=>{
      state.items.sort((a,b)=> b.objData.price - a.objData.price);
    }


  },
});

export let { addCart, removeCart, clearCart , incrementQuantity , decrementQuantity , sortAcsending , sortDesending } = cartSlice.actions;

export default cartSlice.reducer;
