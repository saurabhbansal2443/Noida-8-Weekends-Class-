import {useState , useEffect} from 'react';

// Custom Hook 

const useFindSingleProductData = (id) => {
    let [obj, setObj] = useState(null);

    let getData = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`);
        let objData = await data.json();
        setObj(objData);
      };
    
      useEffect(() => {
        getData();
      }, []);
  return obj ;
}

export default useFindSingleProductData
