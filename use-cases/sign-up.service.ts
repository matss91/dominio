export interface Users{

   
    username: string;
    email:string;
    password:string,
    role:"Admin"|"User"
    
  }



export  function signUser({email,password,role,username}:Users){
    
           if(email==""){
    return({error:{
            code:"invalid data",
            mensaje:"the email cannot be left empty",

           }})}
           if(username==""){
            return({error:{
            code:"invalid data",
            mensaje:"el usuario no puede estar vacio",

           }})}
           if(password==""){
            return({error:{
            code:"invalid data",
            mensaje:"el password no puede estar vacio",

           }})}
           if(email){
    return({error:{
            code:"invalid data",
            mensaje:"email already in use",

           }})}
           }
    
