import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUser_roleFilter } from "../inputs/NestedEnumUser_roleFilter";
import { NestedEnumUser_roleWithAggregatesFilter } from "../inputs/NestedEnumUser_roleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { User_role } from "../../enums/User_role";

@TypeGraphQL.InputType("EnumUser_roleWithAggregatesFilter", {
  isAbstract: true
})
export class EnumUser_roleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => User_role, {
    nullable: true
  })
  equals?: "USER" | "EDITOR" | "LEADER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [User_role], {
    nullable: true
  })
  in?: Array<"USER" | "EDITOR" | "LEADER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [User_role], {
    nullable: true
  })
  notIn?: Array<"USER" | "EDITOR" | "LEADER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUser_roleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUser_roleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUser_roleFilter, {
    nullable: true
  })
  _min?: NestedEnumUser_roleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUser_roleFilter, {
    nullable: true
  })
  _max?: NestedEnumUser_roleFilter | undefined;
}
