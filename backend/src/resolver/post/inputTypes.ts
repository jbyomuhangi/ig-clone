import { Field, InputType } from "type-graphql";
import { MaxLength } from "class-validator";

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  @MaxLength(255)
  caption: string;
}
