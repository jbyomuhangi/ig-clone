import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
  Mutation,
  Arg,
  Args,
} from "type-graphql";

import { isAuth } from "../../middleware/isAuth";
import { MyContext } from "../../types";
import { Post } from "../../entity/Post";
import { CreatePostInput } from "./inputTypes";
import { GetPostsArgs } from "./argsTypes";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  @UseMiddleware(isAuth)
  async posts(
    @Args() args: GetPostsArgs,
    @Ctx() { dataSource }: MyContext
  ): Promise<Post[]> {
    const { offset, limit } = args;

    /* Early return if limit is 0 */
    if (limit === 0) return [];

    const posts = await dataSource
      .getRepository(Post)
      .createQueryBuilder()
      .skip(offset)
      .take(limit)
      .getMany();

    return posts;
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
