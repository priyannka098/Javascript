let arr=[1,2,3,4,5,6]
 arr[6]=undefined;
 arr[7]='priyanka'; //insert  element in array
// console.log(arr[89]); //give undefined   value else  89 index is not avaailable

//override an array
arr[4]='priya'
//delete an array
 delete arr[6];
console.log(arr);

/* looping in an array */
// 1) for loop
let arr3=[2,7,6,8,4,9];
let sum=0;
for(let i=0;i<arr3.length;i++){
    console.log(`index is ${i} and value is :${arr3[i]}`)
    sum=sum+arr3[i];   
}
console.log(`total value is`,sum);


//2) for in loop  in array- it return index of an array
let arr4=[9,5,7,9,0,5,7,]
for(let z in arr4){
    console.log(`for in: index is ${z} and value is ${arr4[z]} `)
}

//for in loop in object
let details={
    name:'priya',
    age:28,
    add:'bangalore',
    isActive:true,
    sal:10000,
    react:true,
}
for(let z in details){
    console.log( ` for in loop for object: ${ z} is ${details[z]}`)
}


 //for of -it return value/element of an array
 let arr7=[7,5,6,,4,3,0]
 for(let y of arr7){
    console.log(`for of: index is ${y} and value is ${arr4[y]} `)
 }

 //for of for object
 let details2={
    name:'priya',
    age:28,
    add:'bangalore',
    isActive:true,
    sal:10000,
    react:true,
}
for(let p of details2){
    console.log( ` for of loop for object: ${p} is ${details2[p]}`)
}



//for of example 2
 const cars = ["BMW", "Volvo", "Mini"];

 let text2 = "";
 for (let x of cars) {
  text2 += x;
  console.log(text2);
 }

//for of example 3

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }

