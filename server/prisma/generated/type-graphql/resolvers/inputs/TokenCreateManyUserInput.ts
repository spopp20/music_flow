import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.InputType("TokenCreateManyUserInput", {
  isAbstract: true
})
export class TokenCreateManyUserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

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
}
