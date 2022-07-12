import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InstrumentAvgOrderByAggregateInput } from "../inputs/InstrumentAvgOrderByAggregateInput";
import { InstrumentCountOrderByAggregateInput } from "../inputs/InstrumentCountOrderByAggregateInput";
import { InstrumentMaxOrderByAggregateInput } from "../inputs/InstrumentMaxOrderByAggregateInput";
import { InstrumentMinOrderByAggregateInput } from "../inputs/InstrumentMinOrderByAggregateInput";
import { InstrumentSumOrderByAggregateInput } from "../inputs/InstrumentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InstrumentOrderByWithAggregationInput", {
  isAbstract: true
})
export class InstrumentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InstrumentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InstrumentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InstrumentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InstrumentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InstrumentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InstrumentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InstrumentSumOrderByAggregateInput | undefined;
}
