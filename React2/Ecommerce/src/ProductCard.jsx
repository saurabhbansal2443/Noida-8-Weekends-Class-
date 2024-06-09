
let ProductCard = ({obj})=>{
    let {thumbnail , title , brand , category , price , rating  } = obj 

    return (
        <div className="card card-compact h-[23rem] w-96 bg-base-100 shadow-xl m-4">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div><div className="badge badge-primary">{brand}</div>
                    <div className="badge badge-primary">{category}</div></div>
                    <p className="text-xl font-bold "> {price } $ </p>
                    <p  className="text-xl font-bold "> Rating : {rating }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard;