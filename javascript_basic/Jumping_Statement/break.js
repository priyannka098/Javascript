/* break is the staement for terminating the current loop*/  
//Example 1
for(let i=1;i<=50;i++){
    console.log("hello")
    if(i==2)
        {
            break;
    }
}
//Example 2
let count=0;
for(let j=5;j<=10;j++){
    for(let k=8;k<=30;k++){
        console.log(count++)
        console.log('hello priyanka');
        if(k==9){
            break;
        }
    }
}