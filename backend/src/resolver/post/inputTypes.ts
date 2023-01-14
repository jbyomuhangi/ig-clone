import { Field, InputType, Int } from "type-graphql";
import { MaxLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  @MaxLength(255)
  caption: string;
}

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true, defaultValue: null })
  @MaxLength(255)
  caption: string;
}
