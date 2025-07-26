export interface Users{

   
    username: string;
    email:string;
    password:string,
    role:"Admin"|"User"
    
  }



export  function signUser({email,password,role,username}:Users){
    if(email){
    return({error:{
            code:"invalid data",
            mensaje:"email already in use",

           }})}
           if(username=""){
            return({error:{
            code:"invalid data",
            mensaje:"el usuario no puede estar vacio",

           }})}
           }
    
