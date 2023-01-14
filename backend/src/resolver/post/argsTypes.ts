import { ArgsType, Field, Int } from "type-graphql";
import { Max, Min } from "class-validator";

import { DEFAULT_PAGINATION_LIMIT } from "../../settings";

@ArgsType()
export class GetPostsArgs {
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Min(0)
  offset: number;

  @Field(() => Int, { nullable: true, defaultValue: DEFAULT_PAGINATION_LIMIT })
  @Min(0)
  @Max(50)
  limit: number;
}
