import { User } from "src/domain/model/entity/User.entity";
import { UserRepository } from "src/domain/repository/user.repository";

export class UserRepositoryImpl implements UserRepository{
    saveUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getAllUser(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    deleteByUserId(id: string): void {
        throw new Error("Method not implemented.");
    }
    
}