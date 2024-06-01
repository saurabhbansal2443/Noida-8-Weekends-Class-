// callbacks 

// let op1 = (a,b)=> a+b ;
// let op2 = (a,b)=> a-b ;
// let op3 = (a,b)=> a*b ;
// let op4 = (a,b)=> a/b ;     

// function calc( a , b , operation){
//     return operation(a,b);
// }


// console.log(calc(2,3,op3))

// function maggi(){
//     setTimeout(function(){
//         console.log("Maggi is ready ")
//     },2000);
// }

// console.log("start")
// maggi();
// console.log("end")


// bake the bread -> adding the sauce -> Add Topib


function bakeBread(bread){

    setTimeout(function(){
        console.log(bread,  " is baked ");

        function addSauce (){
            setTimeout(function(){
                console.log("Sauces added ");

                function addTopings(){
                    setTimeout(function(){
                        console.log("added Topings ");
                    },2000)
                }
                addTopings()
            },2000)
        }
        addSauce()
    },2000)
}

bakeBread("bread")
