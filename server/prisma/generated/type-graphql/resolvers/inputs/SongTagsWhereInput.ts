import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("SongTagsWhereInput", {
  isAbstract: true
})
export class SongTagsWhereInput {
  @TypeGraphQL.Field(_type => [SongTagsWhereInput], {
    nullable: true
  })
  AND?: SongTagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereInput], {
    nullable: true
  })
  OR?: SongTagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsWhereInput], {
    nullable: true
  })
  NOT?: SongTagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  tagId?: IntNullableFilter | undefined;
}
