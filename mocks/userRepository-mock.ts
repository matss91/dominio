import { UsersRepository } from "../repositories/userRepository";
import { Users } from "../entities/user"
export interface MockedUsersRepository extends UsersRepository{
users:Users[]


}
export function mockUsersRepository(users:Users[]=[]):MockedUsersRepository {
    return{
users,
findByEmail: async(email:string):Promise<Users|null>=>{
const user=users.find(user=>user.email==email)
return user?{...user}:null

} 
    

    }
}
