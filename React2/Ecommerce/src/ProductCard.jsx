import {useNavigate } from 'react-router-dom'
let ProductCard = ({obj})=>{
    let {thumbnail , title , brand , category , price , rating , id   } = obj 
    let Navigate = useNavigate();
    

    let handleRouting = ()=>{
       Navigate(`/product/${id}`)
    }  

    let handleBuyNow = (event)=>{
        console.log(" Buy now is clicked ")

        event.stopPropagation()

    }

    return (
        <div className="card card-compact h-[23rem] w-96 bg-base-100 shadow-xl m-4" onClick={handleRouting}>
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