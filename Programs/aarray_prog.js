let arr=[{ name:'utsav',sal:10 ,age:25, address:'delhi'},
         { name:'vicky',sal:150 ,age:23, address:'odisha'},
         { name:'D',   sal:80   ,age:24, address:'delhi'},
         { name:'C'    ,sal:700,age:27, address:'nepal'},
         { name:'UTSAV',sal:2000,age:30, address:'jaipur'},
         { name:'UTX'  ,sal:300 ,age:35, address:'jaipur'}]

/*  retrieve all employee name in their  name 'UT' word is included*/   
     
// for(let i=0;i<arr.length;i++){
//     let result=arr.find((item,i)=>{
//         if(item.name=='UT'){
//             return item;
//         }
//     )}
// }

/* retrieve all employee name  in array */
//  let result=arr.map((item,i,o_arr)=>{
//     return item.name  

// })
// console.log(result); 
// /*   retrieve employee name  whoese sal is maximum */
// const result1=arr.reduce((acc,item,i,o_arr)=>{
//     if(item.sal>acc.sal){
//         acc=item;

//     }
//     return acc
// },);
//  console.log(result1.name);
 
 /* retrieve employee name whose sal is minimum */
//  const minSal=arr.reduce((acc,item,i,o_arr)=>{
//     if(item.sal<acc.sal){
//         acc=item;

//     }
//     return acc
// },);
//  console.log(minSal.name);
// let max=0;
//  for(let i=0;i<arr.length;i++){
//     if(max<arr[i].sal){
//         max=arr[i].sal
//     }
    
    
//  }
//  console.log(max)
/*  retrieve all employee whoese addres is delhi */ 
let address=arr.filter((item)=>{
    return item.address=='delhi'
})
console.log(address)
 






    




    



    
