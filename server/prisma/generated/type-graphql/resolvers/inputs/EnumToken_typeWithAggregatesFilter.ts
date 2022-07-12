import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumToken_typeFilter } from "../inputs/NestedEnumToken_typeFilter";
import { NestedEnumToken_typeWithAggregatesFilter } from "../inputs/NestedEnumToken_typeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Token_type } from "../../enums/Token_type";

@TypeGraphQL.InputType("EnumToken_typeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumToken_typeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumToken_typeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumToken_typeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumToken_typeFilter, {
    nullable: true
  })
  _min?: NestedEnumToken_typeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumToken_typeFilter, {
    nullable: true
  })
  _max?: NestedEnumToken_typeFilter | undefined;
}
