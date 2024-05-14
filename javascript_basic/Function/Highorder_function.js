function SayMyName(callback){
    return callback

}
function myName(){
    return 'utsav'
}
let x=SayMyName(myName);
 let y=x();
console.log(y);