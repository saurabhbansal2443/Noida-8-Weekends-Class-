

function sum(a){
   return function(b){
    return a+b;
   }
}


let add100 = sum(100);

let add200 = sum(200)

console.log(add200(20))