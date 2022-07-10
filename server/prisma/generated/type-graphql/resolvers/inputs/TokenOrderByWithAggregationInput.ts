import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TokenAvgOrderByAggregateInput } from "../inputs/TokenAvgOrderByAggregateInput";
import { TokenCountOrderByAggregateInput } from "../inputs/TokenCountOrderByAggregateInput";
import { TokenMaxOrderByAggregateInput } from "../inputs/TokenMaxOrderByAggregateInput";
import { TokenMinOrderByAggregateInput } from "../inputs/TokenMinOrderByAggregateInput";
import { TokenSumOrderByAggregateInput } from "../inputs/TokenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TokenOrderByWithAggregationInput", {
  isAbstract: true
})
export class TokenOrderByWithAggregationInput {
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
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hashedToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiresAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sentTo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TokenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TokenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TokenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TokenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TokenSumOrderByAggregateInput | undefined;
}
