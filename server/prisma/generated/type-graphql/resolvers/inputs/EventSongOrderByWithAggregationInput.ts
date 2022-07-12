import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongAvgOrderByAggregateInput } from "../inputs/EventSongAvgOrderByAggregateInput";
import { EventSongCountOrderByAggregateInput } from "../inputs/EventSongCountOrderByAggregateInput";
import { EventSongMaxOrderByAggregateInput } from "../inputs/EventSongMaxOrderByAggregateInput";
import { EventSongMinOrderByAggregateInput } from "../inputs/EventSongMinOrderByAggregateInput";
import { EventSongSumOrderByAggregateInput } from "../inputs/EventSongSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventSongOrderByWithAggregationInput", {
  isAbstract: true
})
export class EventSongOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  eventId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventSongCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EventSongCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSongAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EventSongAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSongMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EventSongMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSongMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EventSongMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSongSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EventSongSumOrderByAggregateInput | undefined;
}
