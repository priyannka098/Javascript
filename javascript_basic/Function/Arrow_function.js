// arrow function 
//example1
const addtwo=( num1,num2)=>{
 return  num1+num2
}
 console.log(addtwo( 5,2));

 //  example2 2nd way of  writing -implict return or when there is one line  then no need to write  return
 const add=( num3,num4)=>num3+num4
  console.log(addtwo( 5,6));

  //ex-3 third way of writing
  const add2=( num3,num4)=>(num3+num4)
  console.log(addtwo( 5,6));
  
  //ex-4 for object
  const add4=( num3,num4)=>({username:"priyanka",age:24})
  console.log(add4( ));


//Example of arrow function
var abc = () =>  
{ 
    console.log("Welcome  back priyanka!"); 
} 
  
abc(); 

//In this example, we will declare a self-executing anonymous function
(() => { 
    console.log("GeeksforGeeks"); 
  })(); 


// if after functon there is one linme of code no need of writing {}
  let greet = () => console.log("Welcome to GeeksforGeeks!"); 
    greet();