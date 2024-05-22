/*  This keyword- This refer to current object or current context or current value*/
const user={
    username:'priya',
    age:23,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website}`);
        // console.log(this); //give current context/object
    }
}
//  console.log(this);//give empty object because we are in node enviroment,
                     //because there is no context in global exectution so empty.
// user.welcomeMessage()
//  user.username="priyanka" //username value change
//  user.welcomeMessage()  

 /*   This in Function */
 // in normal function

//  function chai(){
//     let username='priyanka'
//     // console.log(this); //give  global object
//     console.log(this.username); // undefined // we cannot use this  in function

//  }
//  chai()

 //in function expression
   const value=function(){
    // let username="priya"
console.log(this);// give global object
//     console.log(this.username);// undefined
  }
 value();

 //in arrow function
//   const fun=()=>{
//     let username="priya";
//     console.log(this);
//      console.log(this.username);//undefined
//  }
//   fun();



//  let obj={
//     name:'priyanka',
//     print(){
//         let hello=()=>{
//             console.log(this);
//         }
//     hello();
//     } 
//     obj.print()
// }






