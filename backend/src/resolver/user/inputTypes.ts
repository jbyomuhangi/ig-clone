import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";

import { IsUniqueUsername } from "./validators/IsUniqueUsername";

@InputType()
export class RegisterInput {
  @Field(() => String)
  @Length(1, 255)
  @IsUniqueUsername({ message: "A user with that name already exists" })
  username: string;

  @Field(() => String)
  @Length(4, 255)
  password: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
