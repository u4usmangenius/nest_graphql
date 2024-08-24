import { UserService } from './users.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => User, { name: 'usman', nullable: true })
  getUser(): User {
    return this.userService.getUser();
  }
  //   now when we will be getting user from database then we will use async,await, but currently this is just an example
  // like this async getUser()..... etc
}
