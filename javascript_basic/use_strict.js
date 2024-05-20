 /*use strict  */

 //undeclared variabl e is not allowed
//  'use strict'
// x=5;               /*we  have to declare the variable otherwise in strict mode it give error */
// console.log(5);

//Undeclared object is  not allowed
// 'use strict'
//   x={
//     name:'priyanka',
//     age:'24',
//     add:'bangalore',    
// }
// console.log(x);

//Deleting  an object is not allowed
//   'use strict'
//     x={
//     name:'priyanka',
//     age:'24',                //  when  we use strict mode it will give  referenceerror
//     add:'ranchi'              //   if we are not declaring the variable
//                                // and we cannot delet the whole object only property can be deleted.
// }
//    delete x.age;
//   console.log(x);

//Duplicating a parameter name is not allowed
//  'use strict'
//  function add(p1,p1){
//     console.log(p1+p1); //note it take last value ie.3 so its output will be 6
//  }
//  console.log(add(2,3));

 //octal syntax is not allowed
 'use strict'
 let x=012;
 console.log(x);
 

