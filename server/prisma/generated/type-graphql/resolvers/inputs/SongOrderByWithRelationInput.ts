import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongOrderByRelationAggregateInput } from "../inputs/EventSongOrderByRelationAggregateInput";
import { InstrumentSongOrderByRelationAggregateInput } from "../inputs/InstrumentSongOrderByRelationAggregateInput";
import { SongTagsOrderByRelationAggregateInput } from "../inputs/SongTagsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongOrderByWithRelationInput", {
  isAbstract: true
})
export class SongOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alias?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startKey?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tempoCd?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startWords?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  arrangement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongTagsOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: SongTagsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSongOrderByRelationAggregateInput, {
    nullable: true
  })
  events?: EventSongOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongOrderByRelationAggregateInput, {
    nullable: true
  })
  instruments?: InstrumentSongOrderByRelationAggregateInput | undefined;
}
