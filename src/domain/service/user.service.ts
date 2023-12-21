import { promises } from "dns";
import { User } from "../model/entity/User.entity";
import { UserDto } from "../model/user.dto";

export interface IUserService{
    createUser(user: User):Promise<UserDto>;
    getUserById(id:string):Promise<UserDto>;
    getUser(): Promise<UserDto[]>;
    updaterUserById(id:string): Promise<UserDto>;
    deleteUserById(id: string) : Promise<UserDto>;
    pauseuserById(id: string): Promise<UserDto>
}