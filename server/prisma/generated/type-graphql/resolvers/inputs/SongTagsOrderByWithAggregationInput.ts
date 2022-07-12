import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsAvgOrderByAggregateInput } from "../inputs/SongTagsAvgOrderByAggregateInput";
import { SongTagsCountOrderByAggregateInput } from "../inputs/SongTagsCountOrderByAggregateInput";
import { SongTagsMaxOrderByAggregateInput } from "../inputs/SongTagsMaxOrderByAggregateInput";
import { SongTagsMinOrderByAggregateInput } from "../inputs/SongTagsMinOrderByAggregateInput";
import { SongTagsSumOrderByAggregateInput } from "../inputs/SongTagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongTagsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongTagsOrderByWithAggregationInput {
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
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongTagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongTagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SongTagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongTagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongTagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SongTagsSumOrderByAggregateInput | undefined;
}
