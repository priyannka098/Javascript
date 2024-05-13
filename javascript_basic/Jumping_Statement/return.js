  //Example1
  /*Function with return keyword*/
function marks(m1,m2,m3,m4,m5){
 let total=parseInt(m1+m2+m3+m4+m5);

return total;
}
 let result=marks(30,40,50,60,70);
 console.log("total marks:"+result)

 //Example 2
 /*  using of one pfunction argument in another function*/

 function grade(per){
   return (per/500)*100;
   }
    let percentage=grade(result);
    console.log( "the percentage is"+  percentage)

 //Example3
  /*Function without return keyword*/
 function add(a1,b1){
    let sum=(a1+b1);
   console.log("the total sum :"+sum);
 }
  add(30,40)

  //Unreachable statement in javascript
  /*  in function whaterver we write after the return statement
   it will not going to execute throughout the program*/
  function abc(){
    return 'my name is walter white';
    console.log('hello javascript')
  }
  let x=abc();
  console.log(x)
  