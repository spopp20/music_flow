import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.ObjectType("TokenMinAggregate", {
  isAbstract: true
})
export class TokenMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashedToken!: string | null;

  @TypeGraphQL.Field(_type => Token_type, {
    nullable: true
  })
  type!: "RESET_PASSWORD" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sentTo!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;
}
