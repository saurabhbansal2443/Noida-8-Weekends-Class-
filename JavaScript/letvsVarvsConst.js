// re-assign
// var and let  can be re-assigned
// const cannot be re-assigned

// re-declaration
// var can be re-declared
// let, const cannot be re-declared

// Hoisting - It is the default behaviour of JS varaiables and functions ( classes and imports )
// that they will get the memory before the actual code execution

// var ,let and const are hoisted but let and const are hoisted in a diffrent zone
// called ( temporal dead zone )

// Scope
// var let and const are function scoped because (function is also a block of code )

// function scope (done);
// block {} ( done )
// global scope (anyting which is not in function is called global scope )
// lexical scope (done)
// scope chain (done )

// var a = 10;
// let b = 100;

// function first() {
//   console.log(a);
//   console.log(b);

//   b = 999;

//   function second() {
//     var c = 99;

//     function third() {
//       console.log(a);
//       console.log(b);
//       console.log(c);

//       var d = 888;

//       console.log(d);
//     }

//     third();

//     // console.log(d);
//   }

//   second();

//   console.log(b);
// }

// first();

// console.log(a);
// console.log(b)

let a = 10;

console.log(b);

{
  var b = 99;
  let a = 100;
  console.log(a);
  console.log(b);
}

console.log(a);

console.log(b);
