 //examaple -apply callback in async
 setTimeout(function(){
    console.log("timer")
},5000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y")
})

//example 2
let no=2
function registration(){
 if(no>3){
    console.log("regi is done")
    callback()
 }
 function login(){
    console.log("login is done")
    registration(login)
 }
}
registration()