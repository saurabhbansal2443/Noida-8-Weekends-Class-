

let obj = {
    name : "saurabh",
    age : 23 ,
    address :{
        street : "1",
        city : "Delhi",
        country : "India ",
    }
}

//let cobj = obj ;  // shallow copy 

//let cobj = JSON.parse(JSON.stringify(obj));  // Deep copy 

let cobj = {...obj} // mix of shallow and deep 

cobj.address.city  = "Noida"

console.log("Obj" , obj)
console.log("copyObj" , cobj)