

let obj = (function counter(){

let count = 0 ;

function increment(){
    count++;
    console.log(count);
}

function decrement(){
    count--;
    console.log(count);
}

return {
    incFn : increment,
    decFn : decrement
}

})()





obj.incFn()
obj.incFn()

obj.decFn()

count = 60 ;

obj.decFn()


// (function abc(){
//     console.log("abc is called ");
// })()