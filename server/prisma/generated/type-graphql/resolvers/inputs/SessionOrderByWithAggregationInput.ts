import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionAvgOrderByAggregateInput } from "../inputs/SessionAvgOrderByAggregateInput";
import { SessionCountOrderByAggregateInput } from "../inputs/SessionCountOrderByAggregateInput";
import { SessionMaxOrderByAggregateInput } from "../inputs/SessionMaxOrderByAggregateInput";
import { SessionMinOrderByAggregateInput } from "../inputs/SessionMinOrderByAggregateInput";
import { SessionSumOrderByAggregateInput } from "../inputs/SessionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SessionOrderByWithAggregationInput", {
  isAbstract: true
})
export class SessionOrderByWithAggregationInput {
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
  expiresAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  handle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hashedSessionToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  antiCSRFToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  publicData?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  privateData?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SessionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SessionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SessionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SessionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SessionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SessionSumOrderByAggregateInput | undefined;
}
