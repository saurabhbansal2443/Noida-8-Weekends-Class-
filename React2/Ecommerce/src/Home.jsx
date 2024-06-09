import Data from "./Data.js";
import ProductCard from "./ProductCard.jsx";
import { useState , useEffect} from "react";
import ShimmerUI from "./ShimmerUI.jsx";


let Home = () => {
    const [allData , setAllData ] = useState([])
  const [productData, setProductData] = useState([]);
  const [query , setQuery] = useState("");


  let getData = async ()=>{
    let data = await fetch('https://dummyjson.com/products');
    let obj = await data.json();
    setAllData(obj.products);
    setProductData(obj.products);
  } 


  useEffect(() => {
    getData();
  },[])

if(allData.length == 0 ){
    return <ShimmerUI></ShimmerUI>
}

  let handleTopRated = () => {
    let filteredData = allData.filter((obj) => {
      return obj.rating > 4;
    });
    setProductData(filteredData);
  };
  let handleCategory = (category)=>{
    let filteredData = allData.filter((obj) => {
        return obj.category == category;
      });
      setProductData(filteredData);
  }

  let handleSearch = ()=>{
    let filteredData = allData.filter((obj) => {
        return obj.title.toLowerCase().includes(query.toLowerCase().trim());
      });
      setProductData(filteredData);
      setQuery("")
  }

  return (

    <div className=" min-h-[88vh]  w-screen bg-gray-600">
        {console.log("Rener is called ")}
      <div className="utility flex justify-around pt-2">
        <button className="btn btn-primary" onClick={handleTopRated}>
          Top Rated{" "}
        </button>
        <button className="btn btn-primary"onClick={()=> handleCategory('furniture')}> Furniture </button>

        <div className="SearchBar flex flex-row">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full max-w-xs "
            value={query}
            onChange={(event)=>{setQuery(event.target.value)}}
          />
          <button className="btn btn-success mx-2" onClick={handleSearch}>Search </button>
        </div>

        <button className="btn btn-primary"onClick={()=>handleCategory('groceries')}>Grocery</button>
        <button className="btn btn-primary" onClick={()=>handleCategory('beauty')}>Beauty</button>
      </div>

      <div className="cards flex justify-around w-100 flex-wrap ">
        {productData.map((obj) => (
          <ProductCard obj={obj} key={obj.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
