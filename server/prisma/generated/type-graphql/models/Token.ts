import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { Token_type } from "../enums/Token_type";

@TypeGraphQL.ObjectType("Token", {
  isAbstract: true
})
export class Token {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hashedToken!: string;

  @TypeGraphQL.Field(_type => Token_type, {
    nullable: false
  })
  type!: "RESET_PASSWORD";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sentTo!: string;

  user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;
}
