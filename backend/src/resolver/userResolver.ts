import argon2 from "argon2";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UsernamePasswordInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg("input", () => UsernamePasswordInput, { validate: false })
    input: UsernamePasswordInput
  ): Promise<string> {
    const { password } = input;

    const hashedPassword = await argon2.hash(password);

    return `user has been registered! ${hashedPassword}`;
  }

  @Query(() => String)
  hello(): string {
    return "hello world from resolver";
  }
}
