import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class RegisterInput {
  @Field(() => String)
  @Length(1, 255)
  username: string;

  @Field(() => String)
  @Length(4, 255)
  password: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;
}
