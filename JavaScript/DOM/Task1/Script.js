let inputTag = document.querySelector("input");
let btn = document.querySelector("button");

let cont = document.querySelector(".Cont");


btn.addEventListener("click", function(){
   let n = inputTag.value;

   cont.innerHTML = ""

   inputTag.value ="";

   for(let i = 0; i < n;i++){
  let box = document.createElement("div");

  box.classList.add("box");

  cont.appendChild(box);
   }





})