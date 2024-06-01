

let arr = [1,4,3,7,3];

// let fn = function(ele,idx , arr){
//    arr[idx] = ele*2
// }
// arr.forEach(fn)

// console.log(arr)


// let ans = arr.map(function(ele , idx , arr ) {
//  ele*3
// })

// let ans = arr.filter(function(ele, idx , arr){
//    return ele%2==0
// })


let ans = arr.reduce(function(acc,curr){
    return acc + curr;
},10)

console.log("OG" , arr)

console.log("ans " , ans)