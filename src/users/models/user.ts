// this is a single entity

export class User {
  // this class may contain the properties that we expect from users
  userId: string;
  email: string;
  age: number;
  //   if we use question mark then it means this field is optional not compulsory like other properties userId,email, age
  isSubscribed?: boolean;
}
