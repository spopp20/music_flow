import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumToken_typeFilter } from "../inputs/EnumToken_typeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TokenWhereInput", {
  isAbstract: true
})
export class TokenWhereInput {
  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  AND?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  OR?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TokenWhereInput], {
    nullable: true
  })
  NOT?: TokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  hashedToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumToken_typeFilter, {
    nullable: true
  })
  type?: EnumToken_typeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiresAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sentTo?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;
}
