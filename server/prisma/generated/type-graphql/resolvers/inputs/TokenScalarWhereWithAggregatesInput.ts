import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumToken_typeWithAggregatesFilter } from "../inputs/EnumToken_typeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  hashedToken?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumToken_typeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumToken_typeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expiresAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sentTo?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntNullableWithAggregatesFilter | undefined;
}
