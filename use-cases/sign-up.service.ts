import { UsersRepository } from "../repositories/userRepository";

export interface Users{

   
    username: string;
    email:string;
    password:string,
    role:"Admin"|"User"
    
  }
export interface UsersRegisterDependencies{
users:UsersRepository



}


export  function signUser(deps: UsersRegisterDependencies, userData: Users
){
  const {users}=deps
 const  {email,password,username}=userData
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
           const existingUser=users.findByEmail(email)
          
    return(existingUser)}
           
    
