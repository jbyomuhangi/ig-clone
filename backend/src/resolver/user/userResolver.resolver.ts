import argon2 from "argon2";
import { GraphQLError } from "graphql";
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { User } from "../../entity/User";
import { Post } from "../../entity/Post";
import { COOKIE_NAME } from "../../settings";
import { MyContext } from "../../types";
import { LoginInput, RegisterInput } from "./inputTypes";

@Resolver(() => User)
export class UserResolver {
  /////////////////////////////////////////
  // Queries
  /////////////////////////////////////////

  @Query(() => User, { nullable: true })
  @Authorized()
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    const user = await User.findOne({ where: { id: req.session.userId } });
    return user;
  }

  /////////////////////////////////////////
  // Mutations
  /////////////////////////////////////////

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

  @Mutation(() => Boolean)
  @Authorized()
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) => {
      req.session.destroy((error) => {
        if (error) {
          throw new GraphQLError("");
        } else {
          res.clearCookie(COOKIE_NAME);
          resolve(true);
        }
      });
    });
  }

  /////////////////////////////////////////
  // Field Resolvers
  /////////////////////////////////////////

  @FieldResolver(() => [Post])
  @Authorized()
  async posts(@Root() user: User): Promise<Post[]> {
    const posts = await Post.find({ where: { userId: user.id } });
    return posts;
  }
}
