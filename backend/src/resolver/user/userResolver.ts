import argon2 from "argon2";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../../entity/User";
import { LoginInput, RegisterInput } from "./inputTypes";
import { MyContext } from "../../types";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("input", () => RegisterInput) input: RegisterInput,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const { password } = input;
    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      ...input,
      password: hashedPassword,
    }).save();

    req.session.userId = user.id;

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("input", () => LoginInput, { validate: false }) input: LoginInput,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const { username, password } = input;

    const user = await User.findOne({ where: { username } });
    if (!user) throw new GraphQLError("User does not exist");

    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) throw new GraphQLError("Incorrect password");

    req.session.userId = user.id;
    return user;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    /* User is not logged in */
    if (!req.session.id) return null;

    const user = await User.findOne({ where: { id: req.session.userId } });
    return user;
  }
}
