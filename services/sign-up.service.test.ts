import{describe,it,expect}from"vitest"
import {signUser}from"../services/sign-up.service"

describe('sign-up.usercase', () => {
    it('should throw an error if not implement', () => {
        expect(()=>{
            signUser();
        }).toThrow("Not implemented")
    });
     
});
