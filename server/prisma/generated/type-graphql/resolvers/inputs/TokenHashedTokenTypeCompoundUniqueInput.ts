import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.InputType("TokenHashedTokenTypeCompoundUniqueInput", {
  isAbstract: true
})
export class TokenHashedTokenTypeCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hashedToken!: string;

  @TypeGraphQL.Field(_type => Token_type, {
    nullable: false
  })
  type!: "RESET_PASSWORD";
}
