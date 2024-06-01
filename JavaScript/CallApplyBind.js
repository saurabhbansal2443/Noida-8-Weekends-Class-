let getDetails = function(state , city , country ){
 console.log(this.name , this.age , state , city , country );
}

let obj1 = {
    name : "ElonMusk",
    age : 50 ,
   
}

let obj2 = {
    name : "Sachin",
    age : 45 ,
}

let fn = getDetails.bind(obj2 , "Delhi" , "Noida" ," country ")


fn()

