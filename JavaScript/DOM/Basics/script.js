// let h1Ele = document.getElementById("h1tag");

// // console.dir(h1Ele);

// h1Ele.innerHTML = " Changed through JS "

// let h1Ele = document.querySelector(".twoh1");

// h1Ele.style.color = "red"

// let allBoxes = document.querySelectorAll(".box");

// console.log(allBoxes)

// allBoxes[1].innerHTML = "I am 2nd box"

// for (let i = 0;i<allBoxes.length ; i++ ){

//     allBoxes[i].innerHTML = "I am " + (i+1) + " box ";
// }

// h1Ele.setAttribute("id" , "isset");

// allBoxes[0].classList.add("circle")

// // allBoxes[0].classList.remove("circle")

// allBoxes[0].classList.toggle("circle")

// let ele = document.createElement("h1");

// ele.innerHTML = " Hey I am created using JS ";

// allBoxes[0].appendChild(ele)

let imgTag = document.querySelector("img");

// console.dir(imgTag)

let flag = true;

function changeImage() {
  if (flag == true) {
    imgTag.src = "./bPic.jpeg";
  } else {
    imgTag.src = "./aPic.jpeg";
  }

  flag = !flag;
}

imgTag.addEventListener("click", changeImage);
