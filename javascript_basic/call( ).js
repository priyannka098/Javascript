 //call  is predefined function , which call function by passing the honour object in the argument
 //example 1
 function SetUsername(username){
    //complex db calls
    this.username=username;
    
 }
function createUser(username,email, password){
     SetUsername.call(this,username)

 this.email=email,
  this.password=password
 }
 const value=new createUser("priya","priya@fb","@123")
 console.log(value); 


 //Example 2
 let obj={name:'priya',
        address:'bangalore',
        age:24,
        isgender(){
            console.log('male')
        }
     }
 function print(){
    console.log(this.name,this.address+ this.age)
 this.isgender()}
print.call(obj )
