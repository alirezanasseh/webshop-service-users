import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @HideField()
  password: string;
}
