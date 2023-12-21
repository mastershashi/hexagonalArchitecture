import { User } from "../model/entity/User.entity";

export interface UserRepository{
    saveUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User>;
    updateUserById(id: string) : Promise<User>;
    getAllUser(): Promise<User[]>;
    deleteByUserId(id: string): void;
}