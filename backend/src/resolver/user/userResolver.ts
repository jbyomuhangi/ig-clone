import argon2 from "argon2";
import { GraphQLError } from "graphql";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../../entity/User";
import { RegisterInput } from "./inputTypes";

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg("input", () => RegisterInput) input: RegisterInput
  ): Promise<User> {
    try {
      const { password } = input;
      const hashedPassword = await argon2.hash(password);

      const user = await User.create({
        ...input,
        password: hashedPassword,
      }).save();

      return user;
    } catch (error) {
      throw new GraphQLError("Unable to register user");
    }
  }

  @Query(() => String)
  hello(): string {
    return "hello world from resolver";
  }
}
