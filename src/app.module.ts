import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/users.module';

// @module is a nestjs decorator that defines a NestJs module
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // this option generates the GraphQL schema file automatically. The generated schema is based on the types and resolvers defined in the application.
    }),
    UserModule,
  ],
  // Controllers handle incoming requests and provide responses.
  controllers: [],
  // Providers can be services, repositories, or other components used in the application.
  providers: [],
})
// The AppModule class is exported, making it accessible for other modules or components that want to import it.
export class AppModule {}
