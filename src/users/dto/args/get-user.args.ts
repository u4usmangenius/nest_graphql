// let's this is our first arg's (argument)
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field()
  userId: string;
}
