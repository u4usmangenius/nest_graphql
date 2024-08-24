import { UserService } from './users.service';
import { User } from './models/user';
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): User;
}
