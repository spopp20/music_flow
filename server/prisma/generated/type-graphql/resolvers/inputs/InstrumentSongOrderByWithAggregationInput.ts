import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentSongAvgOrderByAggregateInput } from "../inputs/InstrumentSongAvgOrderByAggregateInput";
import { InstrumentSongCountOrderByAggregateInput } from "../inputs/InstrumentSongCountOrderByAggregateInput";
import { InstrumentSongMaxOrderByAggregateInput } from "../inputs/InstrumentSongMaxOrderByAggregateInput";
import { InstrumentSongMinOrderByAggregateInput } from "../inputs/InstrumentSongMinOrderByAggregateInput";
import { InstrumentSongSumOrderByAggregateInput } from "../inputs/InstrumentSongSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InstrumentSongOrderByWithAggregationInput", {
  isAbstract: true
})
export class InstrumentSongOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  words?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mimeType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  instrumentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InstrumentSongCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InstrumentSongAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InstrumentSongMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InstrumentSongMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSongSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InstrumentSongSumOrderByAggregateInput | undefined;
}
