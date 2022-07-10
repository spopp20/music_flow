import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { SongOrderByWithRelationInput } from "../inputs/SongOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventSongOrderByWithRelationInput", {
  isAbstract: true
})
export class EventSongOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventOrderByWithRelationInput, {
    nullable: true
  })
  event?: EventOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  eventId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongOrderByWithRelationInput, {
    nullable: true
  })
  song?: SongOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;
}
