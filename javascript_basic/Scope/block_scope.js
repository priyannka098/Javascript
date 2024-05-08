 // block scope- variable decleration inside the block can not access outside rhe block

 let d=10; 
 {
 var a=5;
let b=6;
const c=7;

console.log( a);
console.log( b);
console.log( c );
console.log( d  );
}
 console.log( a);
 console.log( b);
console.log( c);
 console.log( d );

 //Note: let and cont are block scope ,if we are defining in block but var still mantain global scope.
