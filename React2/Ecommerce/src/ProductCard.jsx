import {useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeStore } from './utils/ThemeController';
import { addCart } from './utils/Store/CartSlice';
import { useDispatch } from 'react-redux';

let ProductCard = ({obj})=>{
    let {thumbnail , title , brand , category , price , rating , id   } = obj 
    let {theme} = useContext(ThemeStore);

    let Navigate = useNavigate();
    let dispatch = useDispatch();
    

    let handleRouting = ()=>{
       Navigate(`/product/${id}`)
    }  

    let handleBuyNow = (event)=>{
        dispatch(addCart(obj))
        event.stopPropagation();


    }

    let darkTheme = "card card-compact h-[23rem] w-96 bg-base-100 shadow-xl m-4"
    let lightTheme ="card card-compact h-[23rem] w-96 bg-gray-300 shadow-xl m-4 text-black"

    return (
        <div className={theme == 'light' ? lightTheme : darkTheme} onClick={handleRouting}>
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div><div className="badge badge-primary">{brand}</div>
                    <div className="badge badge-primary">{category}</div></div>
                    <p className="text-xl font-bold "> {price } $ </p>
                    <p  className="text-xl font-bold "> Rating : {rating }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;