import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventRelationFilter } from "../inputs/EventRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";

@TypeGraphQL.InputType("EventSongWhereInput", {
  isAbstract: true
})
export class EventSongWhereInput {
  @TypeGraphQL.Field(_type => [EventSongWhereInput], {
    nullable: true
  })
  AND?: EventSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereInput], {
    nullable: true
  })
  OR?: EventSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongWhereInput], {
    nullable: true
  })
  NOT?: EventSongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EventRelationFilter, {
    nullable: true
  })
  event?: EventRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  eventId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;
}
