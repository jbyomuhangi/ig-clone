import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
  Mutation,
  Arg,
} from "type-graphql";

import { isAuth } from "../../middleware/isAuth";
import { MyContext } from "../../types";
import { Post } from "../../entity/Post";
import { CreatePostInput } from "./inputTypes";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  @UseMiddleware(isAuth)
  async posts(@Ctx() {}: MyContext): Promise<Post[]> {
    return [];
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input", () => CreatePostInput) input: CreatePostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    const { caption } = input;

    const post = await Post.create({
      caption,
      userId: req.session.userId,
    }).save();

    return post;
  }
}
