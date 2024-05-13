/* continue- */

//Example1
let count=1;
for(let i=1;i<=5;i++){
    
    if(i==3){
       
     continue;
    
    }
    console.log(count++);
    console.log('hello');
    
}

//Example 2
for(let j=1;j<=5;j++)
{
    if(j==3){
       
     continue;
    
    }
    console.log('hello',j);
}
//Example 3
for(let k=1;k<=4;k++)
    {
        for(let l=1;l<=3
            
            ;l++){
            if(l==3){
                continue;
               
               }
               if(k==3){
                break
               }
               console.log('hello',k,l);
        }
        
        
    }
