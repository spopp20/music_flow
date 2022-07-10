import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAvgOrderByAggregateInput } from "../inputs/SongAvgOrderByAggregateInput";
import { SongCountOrderByAggregateInput } from "../inputs/SongCountOrderByAggregateInput";
import { SongMaxOrderByAggregateInput } from "../inputs/SongMaxOrderByAggregateInput";
import { SongMinOrderByAggregateInput } from "../inputs/SongMinOrderByAggregateInput";
import { SongSumOrderByAggregateInput } from "../inputs/SongSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SongCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongSumOrderByAggregateInput | undefined;
}
