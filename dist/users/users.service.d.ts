import { User } from './models/user';
export declare class UserService {
    private users;
    createUser(): User;
    updateUser(): User;
    getUser(): User;
    getUsers(): User[];
    deleteUser(): User[];
}
