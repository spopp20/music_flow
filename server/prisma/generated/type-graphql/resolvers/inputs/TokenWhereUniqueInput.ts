import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenHashedTokenTypeCompoundUniqueInput } from "../inputs/TokenHashedTokenTypeCompoundUniqueInput";

@TypeGraphQL.InputType("TokenWhereUniqueInput", {
  isAbstract: true
})
export class TokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TokenHashedTokenTypeCompoundUniqueInput, {
    nullable: true
  })
  hashedToken_type?: TokenHashedTokenTypeCompoundUniqueInput | undefined;
}
