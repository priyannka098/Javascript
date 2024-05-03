 // In this example, we define an anonymous function

//  let name= function(){
//     console.log("hello priyanka ");
// }
// name();

// In this example, we pass arguments to the anonymous function.
var name1 = function (value) { 
    console.log("Welcome to", value); 
 }
 
 name1("coding world"); 

 //In this example, we pass an anonymous function
  //as a callback function to the setTimeout() method.
  setTimeout(function () { 
    console.log("Welcome Priyanka!"); 
}, 2000); 


//In this example, we have created a self-executing function.
(function () { 
    console.log("Welcome to GeeksforGeeks!"); 
})();


