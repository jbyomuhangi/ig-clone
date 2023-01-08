import argon2 from "argon2";
import { GraphQLError } from "graphql";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../../entity/User";
import { LoginInput, RegisterInput } from "./inputTypes";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("input", () => RegisterInput) input: RegisterInput
  ): Promise<User> {
    const { password } = input;
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      ...input,
      password: hashedPassword,
    }).save();

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("input", () => LoginInput, { validate: false }) input: LoginInput
  ): Promise<User> {
    const { username, password } = input;

    const user = await User.findOne({ where: { username } });
    if (!user) throw new GraphQLError("User does not exist");

    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) throw new GraphQLError("Incorrect password");

    return user;
  }

  @Query(() => String)
  me(): string {
    return "hello, it's me! Mario!";
  }
}
