import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  firstName: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  lastName: string;

  @OneToMany(() => Post, (post) => post.userId)
  posts: Post[];
}
