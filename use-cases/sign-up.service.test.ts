import{describe,it,expect,test}from"vitest"
import {signUser,Users,UsersRegisterDependencies}from"../use-cases/sign-up.service"
import {MockedUsersRepository, mockUsersRepository}from"../mocks/userRepository-mock"

    describe('usuario ya registrado',async() => {
       const _userRepository:MockedUsersRepository=mockUsersRepository([])
         const dependences:UsersRegisterDependencies={users:_userRepository}
   test('should throw an error when not implement',async() => {
            const payload={
                 username:"mynombre",
                email:"email@gmail.com",
               
                password:"123456",
                role:"User"as ("Admin"|"User")
            }
           const result= signUser(dependences,payload)
          
           expect(result).not.toBeNull()
        })
  test('should throw an error when not implement', () => {
            const payload={
                 username:"mynombre",
                email:"",
               
                password:"123456",
                role:"User"as ("Admin"|"User")
            }
            const result=signUser(dependences,payload)
           expect(result).toEqual({error:{
            code:"invalid data",
            mensaje:"the email cannot be left empty"

           }})
        })

          test('should throw an error when not implement', () => {
            const payload={
                 username:"mynombre",
                email:"myemail@gmail.com",
               
                password:"",
                role:"User"as ("Admin"|"User")
            }
            const result=signUser(dependences,payload)
           expect(result).toEqual({error:{
            code:"invalid data",
            mensaje:"el password no puede estar vacio"

           }})
        })

         test('should throw an error when not implement', () => {
            const payload={
                 username:"",
                email:"email@gmail.com",
               
                password:"123456",
                role:"User"as ("Admin"|"User")
            }
            const result=signUser(dependences,payload)
           expect(result).toEqual({error:{
            code:"invalid data",
            mensaje:"el usuario no puede estar vacio"

           }})
        })
    });
    
     

