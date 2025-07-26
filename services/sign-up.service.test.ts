import{describe,it,expect,test}from"vitest"
import {signUser,Users}from"../services/sign-up.service"


    describe('', () => {
        test('should throw an error when not implement', () => {
            const payload={
                username:"mynombre",
                email:"email@gmail.com",
                
                password:"123456",
                role:"User"as "Admin"|"User"
            }
            const result=signUser(payload)
           expect(result).toEqual({error:{
            code:"invalid data",
            mensaje:"email already in use"

           }})
        })
        
   test('should throw an error when not implement', () => {
            const payload={
                 username:"mynombre",
                email:"email@gmail.com",
               
                password:"123456",
                role:"User"as ("Admin"|"User")
            }
            const result=signUser(payload)
           expect(result).toEqual({error:{
            code:"invalid data",
            mensaje:"email already in use"

           }})
        })

    });
    
     

