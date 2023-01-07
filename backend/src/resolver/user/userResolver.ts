import argon2 from "argon2";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { RegisterInput } from "./inputTypes";

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg("input", () => RegisterInput) input: RegisterInput
  ): Promise<string> {
    const { firstName, lastName, password, username } = input;

    const hashedPassword = await argon2.hash(password);

    return `user has been registered! ${hashedPassword}`;
  }

  @Query(() => String)
  hello(): string {
    return "hello world from resolver";
  }
}
