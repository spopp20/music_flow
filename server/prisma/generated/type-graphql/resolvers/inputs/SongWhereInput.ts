import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventSongListRelationFilter } from "../inputs/EventSongListRelationFilter";
import { InstrumentSongListRelationFilter } from "../inputs/InstrumentSongListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SongTagsListRelationFilter } from "../inputs/SongTagsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SongWhereInput", {
  isAbstract: true
})
export class SongWhereInput {
  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  AND?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  OR?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  NOT?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  active?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  alias?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  startKey?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tempoCd?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  startWords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  arrangement?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SongTagsListRelationFilter, {
    nullable: true
  })
  tags?: SongTagsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EventSongListRelationFilter, {
    nullable: true
  })
  events?: EventSongListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongListRelationFilter, {
    nullable: true
  })
  instruments?: InstrumentSongListRelationFilter | undefined;
}
