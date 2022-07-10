import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { InstrumentRelationFilter } from "../inputs/InstrumentRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("InstrumentSongWhereInput", {
  isAbstract: true
})
export class InstrumentSongWhereInput {
  @TypeGraphQL.Field(_type => [InstrumentSongWhereInput], {
    nullable: true
  })
  AND?: InstrumentSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereInput], {
    nullable: true
  })
  OR?: InstrumentSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InstrumentSongWhereInput], {
    nullable: true
  })
  NOT?: InstrumentSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  words?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  mimeType?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  file?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => InstrumentRelationFilter, {
    nullable: true
  })
  instruments?: InstrumentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  instrumentId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  songs?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;
}
