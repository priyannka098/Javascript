// function output examples
function add(a,b){
    console.log("addtion of numbers",a+b)
}
add(5,2);
add(4,0);
add(10,6); //everytime it give different value;

//Default parameter
function add(a,b,c=0){
    console.log("addtion of numbers:",a+b+c); //it is giving the output NAN so , 
                                               //  we declare c =0 then we get the correct 
}                                               //output, and this is cal;led default parameter.
add(8,2);