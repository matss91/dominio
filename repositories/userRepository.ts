import { Users } from "../entities/user"

export interface UsersRepository{
findByEmail(email:string):Promise<Users|null>



}