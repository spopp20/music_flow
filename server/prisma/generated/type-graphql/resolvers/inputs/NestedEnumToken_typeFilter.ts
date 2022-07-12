import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.InputType("NestedEnumToken_typeFilter", {
  isAbstract: true
})
export class NestedEnumToken_typeFilter {
  @TypeGraphQL.Field(_type => Token_type, {
    nullable: true
  })
  equals?: "RESET_PASSWORD" | undefined;

  @TypeGraphQL.Field(_type => [Token_type], {
    nullable: true
  })
  in?: "RESET_PASSWORD"[] | undefined;

  @TypeGraphQL.Field(_type => [Token_type], {
    nullable: true
  })
  notIn?: "RESET_PASSWORD"[] | undefined;

  @TypeGraphQL.Field(_type => NestedEnumToken_typeFilter, {
    nullable: true
  })
  not?: NestedEnumToken_typeFilter | undefined;
}
