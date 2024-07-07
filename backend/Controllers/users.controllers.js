import fs from 'fs';

let data = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/GFG batches /Noida8 weekend/backend/Data.json", "utf8"));

let productsData = data.users;


let createProduct = (req, res) => {
    let data = req.body;
    productsData.push(data);
    res.json(data);
  };
  
  let allProducts = (req, res) => {
    res.json(productsData);
  };
  
  let singleProduct = (req, res) => {
    let id = req.params.id;
    let data = productsData.find((obj) => obj.id == id);
    res.json(data);
  };
  
  let replaceProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = productsData.findIndex((obj) => obj.id == id);
    productsData.splice(dataIdx, 1, { ...req.body, id: id });
    res.json(req.body);
  };

  let updateProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = productsData.findIndex((obj) => obj.id == id);
    let dataObj = productsData[dataIdx];
    let modifiedObj = { ...dataObj, ...req.body };
    productsData.splice(dataIdx, 1, modifiedObj);
    res.json(modifiedObj);
  };
  
  let deleteProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = productsData.findIndex((obj) => obj.id == id);
    let dataObj = productsData[dataIdx];
    productsData.splice(dataIdx, 1);
    res.json(dataObj);
  };

  export {createProduct , updateProduct , deleteProduct  , replaceProduct , allProducts , singleProduct}
  
  