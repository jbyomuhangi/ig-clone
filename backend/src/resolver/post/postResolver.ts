import {
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
  Mutation,
  Arg,
  Args,
  Int,
} from "type-graphql";

import { isAuth } from "../../middleware/isAuth";
import { MyContext } from "../../types";
import { Post } from "../../entity/Post";
import { CreatePostInput, UpdatePostInput } from "./inputTypes";
import { GetPostsArgs } from "./argsTypes";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  @UseMiddleware(isAuth)
  async posts(
    @Args() args: GetPostsArgs,
    @Ctx() { dataSource }: MyContext
  ): Promise<Post[]> {
    const { id, userId, offset, limit } = args;

    /* Early return if limit is 0 */
    if (limit === 0) return [];

    const qb = dataSource.getRepository(Post).createQueryBuilder("p");

    if (id) qb.where("p.id = :id", { id });
    if (userId) qb.where("p.userId = :userId", { userId });

    const posts = await qb.skip(offset).take(limit).getMany();
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

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("input", () => UpdatePostInput) input: UpdatePostInput,
    @Ctx() { req, dataSource }: MyContext
  ): Promise<Post | null> {
    const { id, caption } = input;
    const result = await dataSource
      .createQueryBuilder()
      .update(Post)
      .set({ caption })
      .where("id = :id", { id })
      .andWhere("userId = :userId", { userId: req.session.userId })
      .execute();

    /* Return early if no rows were affected */
    if (!result.affected) return null;

    const updatedPost = await Post.findOne({ where: { id } });
    return updatedPost;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    const result = await Post.delete({ id, userId: req.session.userId });

    if (!result.affected) return false;
    return true;
  }
}
