

// let arr1 = [1,2,3,4];

// let arr2 = ['a','b','c']


// let ans = [...arr1 , 5, 6, 7]

// console.log(ans)

// let obj = {
//     name : "saurabh"
// }

// let obj2 = {
//     age : 23 
// }

// let cobj = {
//     ...obj,
//     ...obj2,
// }

// console.log(cobj)



// function sum(a,b,c){
//     return a+b +c 
// }


// function sum ( ...para){
//     let arr  = para;

//     let sum = 0 ;

//     for (let i = 0;i<arr.length ; i++){
//         sum += arr[i] ;
//     }

//     return sum ;
// }

// console.log(sum(1,2,3,6,4,5,5))

// let arr = [10,20,30,40,60];


// let [a,b,d] = arr ;

// console.log(a,b,d);


let obj = {
    name : "saurabh",
    age : 23 ,
    address :{
        street : "1",
        city : "Delhi",
        country : "India ",
    }
}

let {name , age } = obj

console.log(name , age )
 
