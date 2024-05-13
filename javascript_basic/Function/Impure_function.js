/* when we call the function with same argument ,muttiple times but it produce
diffent output  with same input every time.
2) impure funct have side effects(external change made by function) */

//example 1
let total=0;
function addTototal(value){
    total=total+value;
    return total;

}
console.log(addTototal(5));  // giving differen output for same input
console.log(addTototal(5));
console.log(addTototal(5));
console.log(addTototal(5));


//example 2
function add(a,b)
{
    let result=(Math.trunc(Math.random()*1000)+a+b);
    console.log(result)
}
add(2,8)


